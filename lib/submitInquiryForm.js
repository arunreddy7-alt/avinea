const INQUIRY_ENDPOINT = "/api/inquiry";

export async function submitInquiryForm(payload) {
  const response = await fetch(INQUIRY_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result?.error || "Failed to submit the form. Please try again.");
  }

  return result;
}
