import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

const UserPreferences = ({ preferences, isOpen, toggle, onSave }) => {
  const [showMat, setShowMat] = useState(preferences.showMat)
  const savePreferences = () => {
    onSave({ showMat })
    toggle()
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Preferences</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                defaultChecked={showMat}
                onChange={() => setShowMat(!showMat)}
              />{' '}
              Show mat
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={savePreferences}>
          Save
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default UserPreferences
