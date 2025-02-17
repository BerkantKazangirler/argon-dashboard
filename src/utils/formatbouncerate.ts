// utils.ts

/**
 * Verilen number değerini slice ile işleyerek, sonrasında "%" ekler.
 * @param value - İşlenecek sayısal değer.
 * @param start - Slice başlangıç noktası
 * @param end - Slice bitiş noktası
 * @returns Formatlanmış string değer.
 */
export const formatBouncerate = (value: number, start: number, end: number): string => {

  const valueStr = value.toString();

  // Eğer sayı 4 veya daha fazla basamağa sahipse binlik ayırıcı ekle
  if (valueStr.length >= 3) {
    const firstPart = valueStr.slice(start, valueStr.length - end);  // İlk basamağı al
    const secondPart = valueStr.slice(valueStr.length - end);  // Son 3 basamağı al

    // Formatlanmış değeri döndür
    return `${firstPart},${secondPart}`;
  }

  // Eğer sayı 3 basamaktan küçükse, sadece sayıyı döndür
  return `${valueStr}`;
};
