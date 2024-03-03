export const calculateReadTime = (text: string) => {
  const words = text.split(' ').length;
  const wordsPerMinute = 180;
  return Math.floor(words / wordsPerMinute);
};

export const getCrux = (article: string) => {
  const regex = /<p>(.*?)<\/p>/;
  const match = article.match(regex);
  return (match as RegExpMatchArray)[1].slice(0, 300);
};
