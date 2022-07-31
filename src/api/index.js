export const translate = async (textValue) => {
  const response = await fetch("https://translate.argosopentech.com/translate", {
    method: "POST",
    body: JSON.stringify({
      q: textValue,
      source: "en",
      target: "tr"
    }),
    headers: { "Content-Type": "application/json" }
  });
  let result = await response.json();

  return result;
};