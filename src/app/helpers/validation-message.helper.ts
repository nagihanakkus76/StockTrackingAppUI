export class ValidationMessageHelper {
  static required = (name: string): string => `${name} alanı zorunlu.`;
  static minlength = (name: string, length: number): string => `${name} alanı en az ${length} karakter içermelidir.`;
  static email = (): string => 'Email formatı hatalı.';
  static pattern = (suffix?: string): string => `Girilen format hatalı. ${suffix}`;
  static notTheSame = (): string => 'Şifreler Eşleşmiyor.';
}
