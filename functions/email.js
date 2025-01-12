const Airtable = require('airtable')

export default async function Email(req, res) {
  const key = Netlify.env.get("AIRTABLE_EMAIL_LIST");

  const base = new Airtable({ apiKey: key }).base('app6uYCM0Y0zVw9ds');
  
  const body = await req.json();

  if (typeof body.email !== "string") {
    return new Response("email is not an email", { status: 401 });
  }

  base('Email List').create([
    {
      "fields": {
        "Email": body.email
      }
    },
  ], (err, records) => {
    if (err) {
      console.error(err)
      return;
    }
  })

  return new Response(JSON.stringify({ message: "hello" })); 
}
