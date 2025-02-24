// utils.ts

/**
 * Kart numarasını formatlar, her 4 haneli gruptan sonra bir boşluk ekler ve son basamağını `X` ile değiştirir.
 * Ayrıca 3 haneli CVV'nin son basamağını `X` ile değiştirir.
 * @param cardNumber - İşlenecek kart numarası.
 * @param cvv - İşlenecek CVV kodu.
 * @returns Formatlanmış kart numarası ve CVV.
 */
export const formatCardNumber = (cardNumber: number): string => {
  // Kart numarasını string'e dönüştür
  const cardNumberStr = cardNumber.toString();

  // İlk 12 haneyi gruplara ayır ve boşluk ekle
  const first12Digits = cardNumberStr.slice(0, 12);
  const formattedFirstPart = first12Digits.replace(/(\d{4})(?=\d)/g, "$1 ");

  // Son haneyi 'X' ile değiştir
  const lastDigitX = "X";

  return `${formattedFirstPart} ${lastDigitX}`;
};

/**
 * CVV kodunu formatlar ve son hanesini `X` ile değiştirir.
 * @param cvv - İşlenecek CVV kodu.
 * @returns Formatlanmış CVV kodu.
 */
export const formatCVV = (cvv: number): string => {
  // CVV'yi string'e dönüştür
  const cvvStr = cvv.toString();

  // Son haneyi 'X' ile değiştir
  return `${cvvStr.slice(0, 2)}X`;
};
