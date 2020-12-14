import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { Form, Input, Button } from 'antd';
// import { editLibrary } from '../../../state/actions';

//? would it be faster on base-model cellphones to store library data on redux when the edit button is pushed, and then pull from the store to here, or to have the simple secondary axios request pull that specific library data.
//* I think it'll be best to store all libraries into redux store, then pull the specific one from the store when this page loads
//TODO: refactor to use redux.

const baseURL = 'http://54.158.134.245/api';

const initialState = {
  // id: "",
  name: '',
  description: '',
  library_usage: '',
  notes: '',
  image: '',
};

function EditLibraryForm(props) {
  const [formData, setFormData] = useState(initialState);

  const { push } = useHistory();

  const params = useParams().id;
  // console.log(params); //Why is this console logging 4 times

  const [form] = Form.useForm();

  const getData = () => {
    axios
      .get(`${baseURL}/admin/library/${params}`)
      .then(res => {
        form.setFieldsValue(res.data);
        setFormData(res.data);
      })
      .catch(err => console.dir(err));
  };

  useEffect(() => {
    // ! This should later become available through axiosWithAuth() only once we figure out the Auth with Stakeholder's backend
    // axios
    //   .get(`${baseURL}/admin/library/${params}`)
    //   .then(res => {
    //     form.setFieldsValue(res.data);
    //     setFormData(res.data);
    //   })
    //   .catch(err => console.dir(err));
    getData();
  }, []);

  const handleSubmit = async () => {
    console.log('formData', formData);

    // props.editVillage(params, {
    //   ...formData,
    //   education_contact: {
    //     name: formData.education_contact_name,
    //     email: formData.education_contact_email,
    //     phone: formData.education_contact_phone,
    //   },
    // });
  };

  const handleCancel = () => {
    push('admin/libraries');
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  return (
    <Form onFinish={handleSubmit} form={form}>
      <Form.Item label="Library Name" name="name">
        <Input
          type="text"
          name="name"
          value={formData.name.value}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input
          type="text"
          name="description"
          value={formData.description.value}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item label="Usage" name="library_usage">
        <Input
          type="text"
          name="library_usage"
          value={formData.library_usage}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item label="Notes" name="notes">
        <Input
          type="text"
          name="notes"
          value={formData.notes}
          onChange={e => handleChange(e)}
        />
      </Form.Item>

      <Form.Item label="Image Url" name="image">
        <Input
          type="text"
          name="image"
          value={formData.image}
          onChange={e => handleChange(e)}
        />
      </Form.Item>
      {formData.image ? (
        <img src={formData.image} alt="Library" />
      ) : (
        <p>Previous Image URL broken or not provided</p>
      )}

      <input type="submit" value="Submit Edit" />
      <Button htmlType="button" onClick={() => getData()}>
        Reset changes
      </Button>
      {/* ? why is this concatonating the url instead of replacing it??? It' working right in Libraries.js... */}
      {/* <Button htmlType="link" onClick={() => handleCancel()}>
            Cancel
      </Button> */}
    </Form>
  );
}

export default EditLibraryForm;
// export default connect(null, { editVillage })(EditLibraryForm);
