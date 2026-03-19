export async function pushNotification(text: string) {
  const token = import.meta.env.PUSHOVER_TOKEN || process.env.PUSHOVER_TOKEN;
  const user = import.meta.env.PUSHOVER_USER || process.env.PUSHOVER_USER;
  
  if (!token || !user) {
    console.error('[Pushover API] Missing PUSHOVER_TOKEN or PUSHOVER_USER');
    return;
  }

  try {
    const formData = new URLSearchParams();
    formData.append('token', token);
    formData.append('user', user);
    formData.append('message', text);

    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      body: formData
    });
  } catch (e) {
    console.error('[Pushover API] Error sending push notification:', e);
  }
}
