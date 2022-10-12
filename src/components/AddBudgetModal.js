import { Modal } from "bootstrap"

export default function AddBudgetModal() {
    return(
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>

                    
                </Modal.Header>
            </Form>
        </Modal>

    )
}