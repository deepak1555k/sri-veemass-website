const sheetData = {
  Service: "Test Service",
  Name: "Test Name",
  Email: "test@example.com",
  Phone: "1234567890",
  Company: "Test Company",
  Message: "Testing 123"
};

fetch('https://api.web3forms.com/submit', {
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
})
.then(res => res.text())
.then(console.log)
.catch(console.error);
