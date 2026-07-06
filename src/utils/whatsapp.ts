const WA_NUMBER = "6281232749579"

export function waUrl(message?: string, imageUrl?: string): string {
  let text = message
    ? `Halo NSIX Furniture, ${message}`
    : "Halo NSIX Furniture, saya ingin tanya mengenai furniture."
  if (imageUrl) text += `\n\nGambar: ${imageUrl}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
