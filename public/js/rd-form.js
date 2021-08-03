export default function initForm() {
  const form = document.getElementById('rd-station-form');
  const options = {
    childList: true,
    subtree: true,
  }

  const removeSpinner = (mutationsList) => {
    mutationsList.forEach(record => {
      record.addedNodes.forEach(node => {
        if (node.localName === 'section') {
          document.getElementById('spinner').remove();
        }
      })
    })
  }

  const observer = new MutationObserver(removeSpinner);
  observer.observe(form, options);

  const script = document.createElement('script');
  script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
  script.type = 'text/javascript';
  script.onload = () => {
    const insertForm = document.createElement('script');
    insertForm.src = '/js/rd-form-call.js';
    script.type = 'text/javascript';
    form.appendChild(insertForm);
  }
  form.appendChild(script);
}