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
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-fullscreen">
        <div className="modal-content" style={{
          background: 'rgba(0,0,0,0)',
          border: '0',
        }}>
          <div className="modal-header border-0">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
              style={{
                background: `transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat`,
                opacity: 1,
              }}
            />
          </div>
          <div className="modal-body d-flex justify-content-center align-items-center">
            {
              children
            }
          </div>
        </div>
      </div>
    </div>
  )
}
