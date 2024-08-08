import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Formats a date in the format "DD.MM.YYYY".
 *
 * @param {string} isoDate - The date in ISO format.
 * @returns {string} - The formatted date string.
 *
 * @example
 * formatDate('2023-10-05T14:48:00.000Z'); // '05.10.2023'
 */
export function formatDate(isoDate: string): string {
  return dayjs(isoDate).format('DD.MM.YYYY');
}

/**
 * Formats a date and time in the format "DD.MM.YYYY HH:mm".
 *
 * @param {string} isoDate - The date and time in ISO format.
 * @returns {string} - The formatted date and time string.
 *
 * @example
 * formatDateTime('2023-10-05T14:48:00.000Z'); // '05.10.2023 14:48'
 */
export function formatDateTime(isoDate: string): string {
  return dayjs(isoDate).format('DD.MM.YYYY HH:mm');
}

/**
 * Formats a date and time in the format "DD.MM.YYYY HH:mm:ss".
 *
 * @param {string} isoDate - The date and time in ISO format.
 * @returns {string} - The formatted date and time string.
 *
 * @example
 * formatDateTimeWithSeconds('2023-10-05T14:48:00.000Z'); // '05.10.2023 14:48:00'
 */
export function formatDateTimeWithSeconds(isoDate: string): string {
  return dayjs(isoDate).format('DD.MM.YYYY HH:mm:ss');
}
