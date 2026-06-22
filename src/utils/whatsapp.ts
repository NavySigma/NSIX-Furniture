const WA_NUMBER = "6281232749579"

export function waUrl(message?: string): string {
  const text = message
    ? `Halo NSIX Furniture, ${message}`
    : "Halo NSIX Furniture, saya ingin konsultasi mengenai furniture."
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
