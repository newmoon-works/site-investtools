import React, { useEffect, useRef } from 'react';

export default function Modal({ id, formId, children }) {
  const modal = useRef(null);

  useEffect(() => {
    function handleShow() {
      document.documentElement.style.overflowX = 'unset';
      document.documentElement.style.overflow = 'hidden';
    }
    function handleHidden() {
      document.documentElement.style.overflowX = 'hidden';
      document.documentElement.style.overflow = 'unset';
    }

    modal.current.addEventListener('show.bs.modal', handleShow);
    modal.current.addEventListener('hidden.bs.modal', handleHidden);

    return () => {
      modal.current?.removeEventListener('show.bs.modal', handleShow);
      modal.current?.removeEventListener('hidden.bs.modal', handleHidden);
    }
  }, []);

  useEffect(() => {
    if (formId) {
      new RDStationForms(formId, 'UA-181473567-1').createForm();
    }
  }, []);

  return (
    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modal}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            {
              children
            }
          </div>
        </div>
      </div>
    </div>
  )
}
