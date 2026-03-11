export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "white",
      fontFamily: "Arial",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      
      <h1 style={{
        fontSize: "64px",
        marginBottom: "20px",
        letterSpacing: "-1px"
      }}>
        Silver Fir Capital Management
      </h1>

      <p style={{
        fontSize: "22px",
        color: "#aaa",
        maxWidth: "600px",
        lineHeight: "1.6"
      }}>
        Algorithmic trading infrastructure designed for disciplined market execution.
      </p>

      <div style={{marginTop:"40px",display:"flex",gap:"20px"}}>
        
        <a
          href="#"
          style={{
            padding:"14px 26px",
            background:"white",
            color:"black",
            borderRadius:"10px",
            fontWeight:"600",
            textDecoration:"none"
          }}
        >
          Get Access
        </a>

        <a
          href="#"
          style={{
            padding:"14px 26px",
            border:"1px solid #444",
            borderRadius:"10px",
            color:"white",
            textDecoration:"none"
          }}
        >
          Learn More
        </a>

      </div>

    </main>
  );
}
