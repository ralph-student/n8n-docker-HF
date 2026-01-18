// Minimal keep-alive ping for HF n8n Space
const HF_URL = "https://daytor-dodcker-n8n.hf.space/healthz";  // or any stable endpoint

async function ping() {
  try {
    const response = await fetch(HF_URL, { method: "GET" });
    if (response.ok) {
      console.log(`Ping OK - ${new Date().toISOString()}`);
    } else {
      console.error(`Ping failed - status ${response.status}`);
    }
  } catch (error) {
    console.error("Ping error:", error.message);
  }
}

ping();
