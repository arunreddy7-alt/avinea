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

  if (parts.length === 0) {
    return { firstName: "", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: "", lastName: parts[0] };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts[parts.length - 1],
  };
}

export async function submitInquiry(payload) {
  if (!payload?.name || !payload?.phone || !payload?.email) {
    throw new Error("Name, phone, and email are required.");
  }

  const { firstName, lastName } = splitName(payload.name);

  const formData = new URLSearchParams();

  // Bigin hidden fields
  for (const [key, value] of Object.entries(BIGIN_HIDDEN_FIELDS)) {
    formData.append(key, value);
  }

  // Map our fields to Bigin field names
  formData.append("First Name", firstName);
  formData.append("Last Name", lastName || payload.name);
  formData.append("Phone", payload.phone);
  formData.append("Email", payload.email);

  // Custom Bigin fields (dropdowns)
  if (payload.configuration) {
    formData.append("CONTACTCF2", payload.configuration);
  }
  if (payload.budget) {
    formData.append("CONTACTCF3", payload.budget);
  }
  if (payload.timeline) {
    formData.append("CONTACTCF4", payload.timeline);
  }
  if (payload.siteVisit) {
    formData.append("CONTACTCF5", payload.siteVisit);
  }

  const response = await fetch(BIGIN_WEBFORM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  if (response.status >= 500) {
    throw new Error("Bigin server error. Please try again later.");
  }

  return { provider: "bigin" };
}
