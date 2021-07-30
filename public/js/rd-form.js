export default function initForm() {
  const script = document.createElement('script');
  script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
  script.type = 'text/javascript';
  script.onload = () => {
    const insertForm = document.createElement('script');
    insertForm.src = '/js/rd-form-call.js';
    script.type = 'text/javascript';
    document.getElementById('rd-station-form').appendChild(insertForm);
  }

  const form = document.getElementById('rd-station-form');
  form.appendChild(script);
}