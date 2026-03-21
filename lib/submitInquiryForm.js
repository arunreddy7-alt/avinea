const BIGIN_WEBFORM_URL = "https://bigin.zoho.in/crm/WebForm";

const BIGIN_HIDDEN_FIELDS = {
  xnQsjsdp:
    "d8c37e85d1d4df879d8534c83b49dc59860c4409fc75021d59d6d7e9d0b5eabe",
  xmIwtLD:
    "33732f7bea67d1d84e67f42c65dfde263cd6fa103ff919750d279a211b63dc3abecfe27d375732b6d6cd4351bff63f37",
  actionType: "Q29udGFjdHM=",
  zc_gad: "",
  rmsg: "true",
  returnURL: "null",
};

function splitName(fullName = "") {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: "", lastName: parts[0] };
  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts[parts.length - 1],
  };
}

export async function submitInquiryForm(payload) {
  if (!payload?.name || !payload?.phone || !payload?.email) {
    throw new Error("Name, phone, and email are required.");
  }

  const { firstName, lastName } = splitName(payload.name);

  // Build Bigin field map
  const fields = {
    ...BIGIN_HIDDEN_FIELDS,
    "First Name": firstName,
    "Last Name": lastName || payload.name,
    Phone: payload.phone,
    Email: payload.email,
  };

  if (payload.configuration) fields.CONTACTCF2 = payload.configuration;
  if (payload.budget) fields.CONTACTCF3 = payload.budget;
  if (payload.timeline) fields.CONTACTCF4 = payload.timeline;
  if (payload.siteVisit) fields.CONTACTCF5 = payload.siteVisit;

  // Create a hidden iframe to receive the response
  const iframeName = "bigin_iframe_" + Date.now();
  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  // Create a hidden form that posts to Bigin via the iframe
  const form = document.createElement("form");
  form.method = "POST";
  form.action = BIGIN_WEBFORM_URL;
  form.target = iframeName;
  form.style.display = "none";

  // Add all fields as hidden inputs
  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      cleanup();
      reject(new Error("Submission timed out. Please try again."));
    }, 15000);

    function cleanup() {
      clearTimeout(timeout);
      iframe.removeEventListener("load", onLoad);
      // Delay removal so the iframe can finish loading
      setTimeout(() => {
        document.body.removeChild(iframe);
        document.body.removeChild(form);
      }, 1000);
    }

    function onLoad() {
      cleanup();
      resolve({ provider: "bigin" });
    }

    iframe.addEventListener("load", onLoad);
    form.submit();
  });
}
