import { useRef, useState, useEffect } from 'react'

function App() {
  const emailInputRef = useRef()
  const signedUpEmailRef = useRef()
  const [showModal, setShowModal] = useState(false)
  const sentEmailRef = useRef(0)

  useEffect(() => {
    try {
      const count = parseInt(localStorage.getItem("scrapyard-brampton-emails-sent"))
      if (Number.isNaN(count)) {
        return;
      }
      sentEmailRef.current = count
    } catch(e) {}
  }, [])

  return (
    <div className="patrick relative w-full">
      {
        showModal && <div className="rounded-md bg-white p-4 text-lg absolute top-1/2 left-1/2" style={{
          transform: "translate(-50%, -50%)"
        }}>
          <h2 className="font-bold text-center text-2xl">Thanks for presigning up!</h2>
          <p className="text-sm text-center">signed up with {signedUpEmailRef.current} (send again to change)</p>
          <p>You will recieve an email when signups open</p>
          <p className="mb-2">This really helps us understand the demand for the event so thanks again!</p>
          <button onClick={() => {
            setShowModal(false)
          }} className="p-2 bg-yellow text-darkblue rounded-md w-full hover:bg-opacity-60">Got it!</button>
        </div>
      }
      <div className="absolute top-0 left-0 -z-10 w-full h-full" style={{
        backgroundImage: 'url("/mattile.png")',
        backgroundSize: "contain",
        backgroundRepeat: 'repeat-y',
      }}></div>
      <header className="w-full">
        <div className="p-1 text-center bg-red w-full text-darkblue text-md">
          This site will be relocated by the time signups open at which point it will instead redirect there.
        </div>
        <nav className="text-white w-full flex gap-5 justify-center text-lg p-3">
          <a href="https://hackclub.com/slack">Slack</a>
          <a href="#">Instagram</a>
          <a href="https://scrapyard.hackclub.com/">Learn More</a>
          <a href="https://hackclub.com/">Hack Club</a>
        </nav>
      </header>
      <div style={{
        paddingLeft: "calc(50vw - clamp(9.5rem, 20vw, 28rem))",
        paddingRight: "calc(50vw - clamp(9.5rem, 20vw, 28rem))",
        paddingBottom: "2.5rem",
        paddingTop: "1rem",
      }}>
        <img className="w-full h-full object-contain" src="/logobig.png"/>
      </div>
      <article style={{
        paddingLeft: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingRight: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingBottom: "2.5rem",
        lineHeight: "1.25rem",
      }} className="[&_strong]:text-red text-white flex flex-col gap-3 md:text-center md:text-lg">
        <p>Scrapyard is an event hosted at cities around the world where <strong>hackers compete to make the coolest junk</strong> - and its hosted by highschoolers.</p> 
        <p>Enter your <strong>email below</strong> to notify yourself when signups will open</p> 
        <p>Let us know if you can make it to scrapyard brampton on (<strong>march 15-16</strong>) for a weekends worth of making cool stuff and memories!</p> 
      </article>
      <form style={{
        paddingLeft: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingRight: "calc(50vw - clamp(9.5rem, 25vw, 30rem))",
        paddingBottom: "2.5rem",
      }} className="flex rounded w-full" onSubmit={(e) => {
          e.preventDefault()

          if (sentEmailRef.current > 15) {
            return;
          }
          
          sentEmailRef.current += 1;
          localStorage.setItem("scrapyard-brampton-emails-sent", sentEmailRef.current.toString())

          fetch("/.netlify/functions/email", {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
              email: emailInputRef.current.value
            })
          })
          
          signedUpEmailRef.current = emailInputRef.current.value;
          emailInputRef.current.value = "";

          setShowModal(true)
        }}>
        <input type="email" ref={emailInputRef} className="grow bg-opacity-20 p-2 bg-white rounded placeholder:text-black placeholder:opacity-60 outline-none" placeholder="youremail@example.com" />
        <button className="hover:bg-gray bg-white px-[8%] rounded">Notify me!</button>
      </form>
      <div className="w-full relative" style={{
        height: "10rem", 
        backgroundImage: 'url("/paper.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "100% 100%",
      }}>
        <div className="overflow-hidden hidden max-lg:block absolute top-0 left-1/2 w-[100%]" style={{
          transform: "translate(-50%, 2rem)",
        }}> <img className="object-cover object-left-top w-full h-full" style={{transform: "scale(1.2)"}} src="/bramptonhall.png"/> </div>
      </div>
    </div>
  )
}

export default App
