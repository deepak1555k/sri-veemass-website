export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const sheetData = req.body.data[0];

    const sheetPromise = fetch('https://sheetdb.io/api/v1/a2777p057fh26', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const emailPromise = fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: '1f35d5d0-22ce-4728-8c90-5d2409b7a33c',
        subject: `New Lead: ${sheetData.Service} - ${sheetData.Name}`,
        name: sheetData.Name,
        email: sheetData.Email,
        phone: sheetData.Phone,
        company: sheetData.Company,
        service: sheetData.Service,
        message: sheetData.Message,
        from_name: 'Sri Veemass Website'
      })
    });

    await Promise.all([sheetPromise, emailPromise]);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('API proxy error:', error);
    return res.status(500).json({ error: 'Failed to submit forms' });
  }
}
