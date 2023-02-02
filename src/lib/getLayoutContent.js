export async function getLayoutContent(params = '') {
  const resHeader = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cabecalho${params}`);
  const header = await resHeader.json();

  const resFooter = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/site${params}`);
  const footer = await resFooter.json();

  return { header, footer }
}