import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@mui/material';
import { useHistory } from 'react-router-dom';



const SubmitButton = styled(Button)({
});
const TitleText = styled(Typography)({
})

const FieldTextField = styled(TextField)({
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
})

const FormControlWrapper = styled(FormControl)({
    marginTop: 10,
    marginBottom: 10,
    display: 'block',
});

const options = [
    { value: 'money', label: 'Money' },
    { value: 'todos', label: 'Todos' },
    { value: 'work', label: 'Work' },
    { value: 'play', label: 'Play' }
];



export default function Create() {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);
    const [category, setCategory] = useState('play');



    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (details == '') {
            setDetailsError(true)
        }


        if (title && details) {
            fetch('http://localhost:4000/notes', {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, details, category })

            }).then(() => history.push('/'))
        }
    }

    return (
        <Container>
            <Typography variant="h6" component="h2" gutterBottom>
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit} >

                <FieldTextField
                    onChange={(e) => setTitle(e.target.value)}
                    label="Note Title *"
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleError}

                />
                <FieldTextField
                    onChange={(e) => setDetails(e.target.value)}
                    label="Details"
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    multiline
                    rows={4}
                    error={detailsError}

                />

                {/* <RadioGroup>
          <FormControlLabel value="money" control = {<Radio color='secondary' />} label="Money" />
          <FormControlLabel value="todos" control={<Radio color='secondary' />} label="Todos" />
          <FormControlLabel value="work" control={<Radio color='secondary' />} label="Work" />
        </RadioGroup>  */}

                <FormControlWrapper>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        {options.map((i) => (
                            <FormControlLabel key={i.value} value={i.value} control={<Radio color="secondary" />} label={i.label} />
                        ))}
                    </RadioGroup>
                </FormControlWrapper>

                <SubmitButton type="submit" variant="contained" color="secondary" endIcon={<SendIcon />}>
                    Submit
                </SubmitButton>

            </form>



        </Container>
    );
}