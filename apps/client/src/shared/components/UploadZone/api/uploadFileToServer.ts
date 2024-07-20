const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function uploadFileToServer(formData: FormData) {
  const response = await fetch(`${BACKEND_URL}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('loading error');
  }

  return response.json();
}
