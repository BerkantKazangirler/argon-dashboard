// utils.ts

/**
 * Tarih bilgisini yıl, ay, gün ve saat olarak formatlar.
 * @param date - İşlenecek tarih verisi (ISO 8601 formatında).
 * @returns Formatlanmış tarih string'i.
 */
export const formatDate = (date: string): string => {
  // Verilen tarih bilgisini Date nesnesine çevir
  const dateObj = new Date(date);

  // Yıl, ay, gün ve saat bilgilerini al
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Ay 0-11 arası döner, bu yüzden 1 ekliyoruz
  const day = String(dateObj.getDate()).padStart(2, "0"); // Gün bilgisini 2 basamağa tamamlıyoruz
  const hours = String(dateObj.getHours()).padStart(2, "0"); // Saat bilgisini 2 basamağa tamamlıyoruz

  // Formatlanmış tarihe döndür
  return `${year}-${month}-${day} ${hours}:00`;
};
