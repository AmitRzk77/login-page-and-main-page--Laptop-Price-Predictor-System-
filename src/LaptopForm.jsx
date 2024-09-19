import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1e1e2f;
  padding: 20px;
  border-radius: 10px;
  color: white;
  width: 1400px;
  margin: 0 auto;
`;

const InputField = styled.input`
  padding: 10px;
  margin: 10px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 30%;
`;

const SelectField = styled.select`
  padding: 10px;
  margin: 10px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 30%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LaptopForm = () => {
  const [formData, setFormData] = useState({
    brand: '',
    type: '',
    ram: '',
    weight: '',
    os: '',
    gpu: '',
    touchscreen: '',
    ipsDisplay: '',
    hardDrive: '',
    ssdSize: '',
    screenResolution: '',
    screenSize: '',
    processor: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <FormContainer>
      <h2>Laptop Price Predictor</h2>
      <form onSubmit={handleSubmit}>
        <SelectField name="brand" value={formData.brand} onChange={handleChange}>
          <option value="">Select Brand</option>
          <option value="Apple">Apple</option>
          <option value="Dell">Dell</option>
          <option value="HP">HP</option>
        </SelectField>

        <SelectField name="type" value={formData.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Ultrabook">Ultrabook</option>
          <option value="Gaming">Gaming</option>
          <option value="Notebook">Notebook</option>
        </SelectField>

        <SelectField name="ram" value={formData.ram} onChange={handleChange}>
          <option value="">Select RAM (GBs)</option>
          <option value="2">2 GB</option>
          <option value="4">4 GB</option>
          <option value="8">8 GB</option>
          <option value="16">16 GB</option>
        </SelectField>

        <InputField
          type="number"
          name="weight"
          placeholder="Weight (in kg)"
          value={formData.weight}
          onChange={handleChange}
        />

        <SelectField name="os" value={formData.os} onChange={handleChange}>
          <option value="">Select OS</option>
          <option value="Windows">Windows</option>
          <option value="Mac">Mac</option>
          <option value="Linux">Linux</option>
        </SelectField>

        <SelectField name="gpu" value={formData.gpu} onChange={handleChange}>
          <option value="">Select GPU</option>
          <option value="Intel">Intel</option>
          <option value="NVIDIA">NVIDIA</option>
          <option value="AMD">AMD</option>
        </SelectField>

        <SelectField name="touchscreen" value={formData.touchscreen} onChange={handleChange}>
          <option value="">Touchscreen?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </SelectField>

        {/* New Fields */}
        
        <SelectField name="ipsDisplay" value={formData.ipsDisplay} onChange={handleChange}>
          <option value="">IPS Display?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </SelectField>

        <InputField
          type="number"
          name="hardDrive"
          placeholder="Hard Drive (in GB)"
          value={formData.hardDrive}
          onChange={handleChange}
        />

        <InputField
          type="number"
          name="ssdSize"
          placeholder="SSD Size (in GB)"
          value={formData.ssdSize}
          onChange={handleChange}
        />

        <InputField
          type="text"
          name="screenResolution"
          placeholder="Screen Resolution (e.g., 1920x1080)"
          value={formData.screenResolution}
          onChange={handleChange}
        />

        <InputField
          type="number"
          name="screenSize"
          placeholder="Screen Size (in inches)"
          value={formData.screenSize}
          onChange={handleChange}
        />

        <SelectField name="processor" value={formData.processor} onChange={handleChange}>
          <option value="">Select Processor</option>
          <option value="Intel Core i5">Intel Core i5</option>
          <option value="Intel Core i7">Intel Core i7</option>
          <option value="AMD Ryzen 5">AMD Ryzen 5</option>
          <option value="AMD Ryzen 7">AMD Ryzen 7</option>
        </SelectField>

        <Button type="submit">Predict Price</Button>
      </form>
    </FormContainer>
  );
};

export default LaptopForm;
