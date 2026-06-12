const data = {
  Date: new Date().toLocaleString(),
  Name: "Test Name",
  Company: "Test Company",
  Email: "test@example.com",
  Phone: "1234567890",
  Service: "Other",
  Message: "Testing 123"
};

fetch('https://sheetdb.io/api/v1/a2777p057fh26', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ data: [data] })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);
