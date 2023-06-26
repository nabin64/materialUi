import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@mui/material';

const Edit = () => {
    const history = useHistory();

    let { id } = useParams();
    const [values, setValues] = useState({
        id: id,
        title: '',
        details: '',
        category: '',
    });

    useEffect(() => {
        axios.get('http://localhost:4000/notes/' + id)
            .then((res) => {
                const { title, details, category } = res.data;
                setValues({ ...values, title, details, category });
            })
            .catch((err) => console.log(err));
    }, [id, setValues]); // Include `id` and `setValues` in the dependency array


    const options = [
        { value: 'money', label: 'Money' },
        { value: 'todos', label: 'Todos' },
        { value: 'work', label: 'Work' },
        { value: 'play', label: 'Play' },
        { value: 'reminders', label: 'Reminders' },
    ];


    const SubmitButton = styled(Button)({});
    const FieldTextField = styled(TextField)({
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    });

    const FormControlWrapper = styled(FormControl)({
        marginTop: 10,
        marginBottom: 10,
        display: 'block',
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4000/notes/' + id, values)
            .then(() => history.push('/'))
            .catch((err) => console.log(err));

    };

    const handleChange = (e) => {
        setValues({ ...values, category: e.target.value });
    };

    return (
        <Container>
            <Typography variant="h6" component="h2" gutterBottom>
                Create a New Note {id}
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleUpdate}>
                <FieldTextField
                    onChange={(e) => {
                        console.log(e.target.value); // Check the value being entered
                        setValues({ ...values, title: e.target.value });
                    }}
                    label="Note Title *"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    name='title'
                    value={values.title}
                />
                <FieldTextField
                    on={(e) => {
                        console.log(e.target.value); // Check the value being entered
                        setValues({ ...values, details: e.target.value });
                    }}

                    label="Details"
                    variant="outlined"
                    color="secondary"
                    fullWidth

                    name='details'
                    multiline
                    rows={4}

                    value={values.details}
                />

                <FormControlWrapper>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={values.category} onChange={handleChange} name='category'>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio color="secondary" />}
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>
                </FormControlWrapper>

                <SubmitButton type="submit" variant="contained" sx={{ color: 'white', backgroundColor: 'green' }} endIcon={<SendIcon />}>
                    UPDATE
                </SubmitButton>
            </form>
        </Container>
    );
};

export default Edit;
