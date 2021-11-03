import { Grid, Typography } from '@mui/material';
import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import PublicIcon from '@mui/icons-material/Public';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SubjectIcon from '@mui/icons-material/Subject';
import FlashAutoIcon from '@mui/icons-material/FlashAuto';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Dropzone from 'react-dropzone'
import { FormHelperText } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PanelHeader from '../../Shared/common/PanelHeader';
import { connect } from 'react-redux';
const validationSchema = yup.object({
    state: yup
        .string('Enter your State')
        .required('State is required'),
    department: yup
        .string('Enter your Department')
        .required('Department is required'),
    city: yup
        .string('Enter your City')
        .required('City is required'),
    complainType: yup
        .string('Enter your Complain type')
        .required('Complain type is required'),
    severity: yup
        .string('Enter your Severity type')
        .required('Severity type is required'),
    subject: yup
        .string('Enter your Subject')
        .required('Subject is required'),


});

function RaiseComplaints({ auth }) {
    const [description, setDescription] = useState("");
    const [files, setFiles] = useState([]);
    const [descriptionError, setDescriptionError] = useState("");

    const editorRef = useRef(null);

    const onDrop = (files) => {
        setFiles(files)
    };

    const parseEditorData = (content) => {
        let textContent = editorRef.current.getContent({ format: 'text' })
        if (textContent !== "" && textContent !== "undefined") {
            setDescription({ description: content });
            setDescriptionError("")
        } else {
            setDescriptionError("Description field is required")
        }
        console.log(descriptionError);
    }


    const handleClick = () => {
        let textContent = editorRef.current.getContent({ format: 'text' })
        if (textContent !== "" && textContent !== "undefined") {
            setDescription({ description: editorRef.current.getContent() });
            setDescriptionError("")
        } else {
            setDescriptionError("Description field is required")
        }
    }


    const formik = useFormik({
        initialValues: {
            state: '',
            department: '',
            city: '',
            complainType: "",
            severity: '',
            subject: ''
        },
        validationSchema: validationSchema,

        onSubmit: (allValues) => {
            let textContent = editorRef.current.getContent({ format: 'text' })
            if (textContent !== "" && textContent !== "undefined") {
                allValues.description = description.description;
                allValues.files = files;
                setDescriptionError("")

            } else {
                setDescriptionError(descriptionErrorMessage)
            }
            console.log(allValues)
        },
    });
    const newFiles = files.map(file => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));
    return (
        <Grid item container px={30} py={8}>
            {auth.user ? (<Grid container my={5}><Typography style={{ fontWeight: "bold", fontSize: "20px" }}>Welcome {auth.user ? auth.user.FullName : ""}</Typography></Grid>
            ) : ""
            }
            <Grid item container py={2} style={{ backgroundColor: "#2B7A78" }}>
                <PanelHeader title={"Raise Complain"} />
            </Grid>
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Grid item md={1} sm={1} xs={2} mt={2}>
                        <PublicIcon />
                    </Grid>

                    <Grid container item md={11} sm={11} xs={10}>
                        <TextField
                            variant="standard"
                            name="state"
                            id="state"
                            select
                            fullWidth
                            label="Select Your stete"
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.state &&
                                Boolean(formik.errors.state)
                            }
                            helperText={
                                formik.touched.state && formik.errors.state
                            }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Grid item md={1} sm={1} xs={2}>
                        <WarningAmberIcon />
                    </Grid>
                    <Grid item md={11} sm={11} xs={10}>
                        <FormControl component="fieldset" error={
                            formik.touched.complainType &&
                            Boolean(formik.errors.complainType)
                        }>
                            <RadioGroup row aria-label="gender" name="complainType" onChange={formik.handleChange}>
                                <FormLabel component="legend" style={{ marginRight: "15px", marginTop: "10px" }} name="complainType">Complain Type:</FormLabel>
                                <FormControlLabel value="public" control={<Radio />} label="Public" />
                                <FormControlLabel value="private" control={<Radio />} label="Private" />
                            </RadioGroup>
                        </FormControl>
                        <FormHelperText style={{ color: "red" }}>{
                            formik.touched.complainType &&
                            formik.errors.complainType
                        }</FormHelperText>
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Grid item md={1} sm={1} xs={2}>
                        <FlashAutoIcon />
                    </Grid>
                    <Grid item md={11} sm={11} xs={10}>
                        <FormControl component="fieldset" error={
                            formik.touched.severity &&
                            Boolean(formik.errors.severity)
                        }>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" name="severity" onChange={formik.handleChange}>
                                <FormLabel component="legend" name="severity" style={{ marginRight: "15px", marginTop: "10px" }}>Severity:</FormLabel>
                                <FormControlLabel value="high" control={<Radio />} label="Hign" />
                                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                                <FormControlLabel value="low" control={<Radio />} label="Low" />
                            </RadioGroup>
                        </FormControl>
                        <FormHelperText style={{ color: "red" }}>{
                            formik.touched.severity &&
                            formik.errors.severity
                        }</FormHelperText>
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Grid item md={1} sm={1} xs={2} mt={2}>
                        <WorkOutlineIcon />
                    </Grid>
                    <Grid item md={11} sm={11} xs={10}>
                        <TextField
                            variant="standard"
                            name="department"
                            id="department"
                            select
                            fullWidth
                            label="Select Your Department"
                            value={formik.values.department}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.department &&
                                Boolean(formik.errors.department)
                            }
                            helperText={
                                formik.touched.department && formik.errors.department
                            }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Grid item md={1} sm={1} xs={2} mt={3}>
                        <SubjectIcon />
                    </Grid>

                    <Grid container item md={11} sm={11} xs={10}>
                        <TextField
                            color="primary"
                            margin="normal"
                            fullWidth
                            id="subject"
                            type="text"
                            label="Please provide the subject line"
                            name="subject"
                            autoComplete="subject"
                            autoFocus
                            variant="standard"
                            value={formik.values.subject}
                            onChange={formik.handleChange}
                            error={formik.touched.subject && Boolean(formik.errors.subject)}
                            helperText={formik.touched.subject && formik.errors.subject}
                        />
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="start">
                    <Grid item md={1} sm={1} xs={2} mt={2}>
                        <FormatTextdirectionLToRIcon />
                    </Grid>
                    <Grid item md={11} sm={11} xs={10}>
                        <Editor
                            apiKey="dd83bg0e7v7jnnfjjqwg7bktooeb1n4wcn2vn7vmeaof51y5"
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue=""
                            id="description"
                            name="description"
                            onEditorChange={(content, editor) =>
                                parseEditorData(content)
                            }

                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        <FormHelperText style={{ color: "red" }}>{
                            descriptionError !== "" ? descriptionError : ""
                        }</FormHelperText>
                    </Grid>
                </Grid>

                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" justifyContent="center">
                    <Grid item md={1} sm={1} xs={2} mt={4}>
                        <CloudUploadIcon />
                    </Grid>
                    <Grid item md={11} sm={11} xs={10} style={{ overflow: "hidden" }}>
                        <Dropzone onDrop={onDrop}>
                            {({ getRootProps, getInputProps }) => (
                                <section className="container">
                                    <div {...getRootProps({ className: 'dropzone' })}>
                                        <input {...getInputProps()} />
                                        <p style={{
                                            border: "1px dashed grey",
                                            padding: "20px",
                                            background: "#f8f8f8",
                                        }}>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    <aside>
                                        <h4>{files.length > 0 ? "Files" : ""}</h4>
                                        < ul > {newFiles}</ul>
                                    </aside>
                                </section>
                            )}
                        </Dropzone>
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Grid item md={1} sm={1} xs={2} mt={2}>
                        <EditLocationAltIcon />
                    </Grid>
                    <Grid item md={11} sm={11} xs={10}>
                        <TextField
                            variant="standard"
                            name="city"
                            id="city"
                            select
                            fullWidth
                            label="Select Your city"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={
                                formik.touched.city &&
                                Boolean(formik.errors.city)
                            }
                            helperText={
                                formik.touched.city && formik.errors.city
                            }
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </TextField>
                    </Grid>
                </Grid>
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Button
                        onClick={handleClick}
                        style={{ color: "#fff" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                    >
                        Raise Complain
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps)(RaiseComplaints);
