export default async function handler(req, res) {
  // Autoriser uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const { name, email, phone, brand, model, service, notes } = req.body || {};

    // Validation des champs obligatoires
    if (!phone || !brand || !model) {
      return res.status(400).json({ error: 'Veuillez renseigner au minimum la marque, le modèle et un numéro de téléphone.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY absente dans les variables d environnement Vercel');
      return res.status(500).json({ error: 'Configuration serveur incomplète (clé API manquante).' });
    }

    // Email expéditeur (par défaut le domaine officiel ou onboarding Resend si pas encore validé)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'MECA DIAG SOFT AUTO <onboarding@resend.dev>';
    const toEmail = process.env.CLIENT_EMAIL || 'jeanlouisfernandez13@gmail.com';

    // Contenu HTML soigné aux couleurs motorsport de l'atelier
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Nouvelle demande de devis</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050608; color: #ffffff; padding: 25px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #0e1117; border: 1px solid rgba(225, 29, 72, 0.4); border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
        
        <!-- En-tête -->
        <div style="background: linear-gradient(135deg, #e11d48 0%, #9f1239 100%); padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
            🚗 NOUVELLE DEMANDE DE DEVIS
          </h1>
          <p style="color: rgba(255,255,255,0.85); margin: 6px 0 0 0; font-size: 13px;">
            Atelier MECA DIAG SOFT AUTO • Miramas (13)
          </p>
        </div>

        <!-- Corps du message -->
        <div style="padding: 26px;">
          
          <!-- Bloc Véhicule & Prestation -->
          <div style="background-color: #161b26; border-left: 4px solid #e11d48; padding: 16px 20px; border-radius: 6px; margin-bottom: 22px;">
            <p style="margin: 0 0 8px 0; font-size: 13px; color: #94a3b8; text-transform: uppercase; font-weight: 700;">Prestation demandée</p>
            <p style="margin: 0 0 12px 0; font-size: 18px; color: #ffffff; font-weight: 800;">${service || 'Reprogrammation Moteur'}</p>
            
            <p style="margin: 0 0 4px 0; font-size: 13px; color: #94a3b8; text-transform: uppercase; font-weight: 700;">Véhicule</p>
            <p style="margin: 0; font-size: 16px; color: #cbd5e1; font-weight: 600;">${brand} - ${model}</p>
          </div>

          <!-- Coordonnées Client -->
          <h3 style="color: #ffffff; font-size: 15px; text-transform: uppercase; margin: 20px 0 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
            👤 Coordonnées du contact
          </h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 22px;">
            ${name ? `<tr><td style="padding: 6px 0; color: #94a3b8; width: 110px;">Nom :</td><td style="padding: 6px 0; color: #ffffff; font-weight: 600;">${name}</td></tr>` : ''}
            <tr>
              <td style="padding: 6px 0; color: #94a3b8;">Téléphone :</td>
              <td style="padding: 6px 0;">
                <a href="tel:${phone}" style="color: #e11d48; font-weight: 800; font-size: 16px; text-decoration: none;">📞 ${phone}</a>
              </td>
            </tr>
            ${email ? `<tr><td style="padding: 6px 0; color: #94a3b8;">Email :</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td></tr>` : ''}
          </table>

          <!-- Message / Symptômes -->
          ${notes ? `
          <div style="background-color: #141822; padding: 16px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 24px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; font-weight: 700;">Précisions / Symptômes :</p>
            <p style="margin: 0; font-size: 14px; color: #cbd5e1; line-height: 1.6; white-space: pre-wrap;">${notes}</p>
          </div>
          ` : ''}

          <!-- Boutons d'action rapide -->
          <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
            <a href="tel:${phone}" style="display: inline-block; background-color: #e11d48; color: #ffffff; font-weight: 800; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; margin-right: 8px;">
              📞 Rappeler le client
            </a>
            ${email ? `
            <a href="mailto:${email}?subject=Votre%20demande%20de%20devis%20MECA%20DIAG%20SOFT%20AUTO&body=Bonjour%2C%20faisant%20suite%20%C3%A0%20votre%20demande%20sur%20notre%20site%20pour%20votre%20${encodeURIComponent(brand)}%20${encodeURIComponent(model)}..." style="display: inline-block; background-color: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); color: #ffffff; font-weight: 700; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px;">
              ✉️ Répondre par email
            </a>
            ` : ''}
          </div>

        </div>

        <!-- Pied de page -->
        <div style="background-color: #050608; padding: 14px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.05);">
          Message transmis automatiquement depuis le formulaire de devis sur www.mecadiagsoftauto.fr
        </div>

      </div>
    </body>
    </html>
    `;

    // Appel à l'API Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email || undefined,
        subject: `🚗 Nouveau Devis [${brand} ${model}] - ${service || 'Prestation'}`,
        html: htmlContent
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Erreur API Resend :', resendData);
      return res.status(500).json({ error: resendData.message || 'Erreur lors de l envoi de l email.' });
    }

    return res.status(200).json({ success: true, message: 'Demande de devis transmise avec succès à l atelier !' });

  } catch (error) {
    console.error('Erreur interne handler contact :', error);
    return res.status(500).json({ error: 'Une erreur imprévue est survenue lors de l envoi.' });
  }
}
