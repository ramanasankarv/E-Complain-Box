import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useState, useRef, useEffect, Fragment } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { FormHelperText } from '@mui/material';
import { Editor } from '@tinymce/tinymce-react';
import FlashAutoIcon from '@mui/icons-material/FlashAuto';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Public from '@mui/icons-material/Public';
import Subject from '@mui/icons-material/Subject';
import { getSingleComplainData, updateComplainStatus, createComment } from '../../redux/actions/auth';
import { useParams } from "react-router-dom"
import { connect } from 'react-redux';
import ReactHtmlParser from "react-html-parser";
import moment from 'moment'


import Loader from '../../Shared/common/Loader';
function ComplainDepartmentChange({ auth }) {
    const [description, setDescription] = useState("");
    const [complainStatus, setComplainStatus] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const editorRef = useRef(null);
    const [dataLoaded, setDataLoaded] = useState(false)



    const [complainData, setComplainData] = useState(null)
    let { id } = useParams()
    const [loader, setLoader] = useState(true)

    useEffect(async () => {
        const data = getSingleComplainData(id)
            .then(res => {
                console.log("tusher")
                setComplainData(res)
                setLoader(false)
            })
    }, [setComplainData, loader]);
    const parseEditorData = (content) => {
        let textContent = editorRef.current.getContent({ format: 'text' })
        if (textContent !== "" && textContent !== "undefined") {
            setDescription({ description: content });
            setDescriptionError("")
        } else {
            setDescriptionError("Comment field can not be empty")
        }
        console.log(descriptionError);
    }
    console.log(complainData)
    const handleChangeStatus = (e) => {
        setComplainStatus({ complainStatus: e.target.value })
    }
    const handleSubmitStatus = (e) => {
        updateComplainStatus(complainStatus.complainStatus, auth.user.id, id)
        //pass it in api
    }
    const handleClick = () => {
        setLoader(true);
        let textContent = editorRef.current.getContent({ format: 'text' })
        if (textContent !== "" && textContent !== "undefined") {
            setDescription({ description: editorRef.current.getContent() });
            setDescriptionError("");
            console.log(description)
            createComment(description.description, auth.user.id, id).then(res => {
                setLoader(false)
            });
        } else {
            setDescriptionError("Comment field can not be empty")
        }
    }
    const toDateTime = (secs) => {
        var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
        t.setUTCSeconds(secs);
        const d = new Date("2015-03-25");
        let newDate = moment(t).fromNow()

        return newDate;
    }

    return loader || !complainData.ComplainStatus || !auth.user ? (<Grid container px={12} mt={12} style={{ height: "100%" }}>
        <Loader />
    </Grid>) : (
        <Grid container py={12} px={{ xs: 2, sm: 10, md: 20 }}>
            <Grid container>
                <Grid item md={6} sm={6} xs={6}>
                    <Typography>
                        Complain ID: {id}
                    </Typography>
                    <Typography>
                        Complain Status: {complainData.ComplainStatus}
                    </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={6}
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Typography>
                        Welcome {auth.user.FullName}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container py={4} direction="row" alignItems="center">

                <Grid item >
                    <FormControl component="fieldset">
                        <RadioGroup size="large"
                            row aria-label="gender" name="row-radio-buttons-group" name="severity" onChange={handleChangeStatus} value={complainStatus.complainStatus || complainData.ComplainStatus}>
                            <FormLabel component="legend" name="severity" style={{ marginRight: "15px", marginTop: "10px" }}></FormLabel>
                            <FormControlLabel value="Raise" control={<Radio />} label="Raised" />
                            <FormControlLabel value="In Progress" control={<Radio />} label="In Progress" />
                            <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" size="large" style={{ borderRadius: "30px", background: "#23A94B", color: "#fff" }} onClick={handleSubmitStatus}>
                        Change the status
                    </Button>
                </Grid>
            </Grid>
            <Grid container style={{ background: "#fff", color: "#1F5B88" }} py={4} px={4} mt={12} boxShadow={8} borderRadius="20px">
                <Grid item container direction="row" alignItems="center">
                    <Grid item md={12} sm={12} xs={12} pt={4}>
                        <Typography variant="subtitle1" style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <DateRangeIcon /> <b style={{ marginRight: "10px " }}>Date: </b> {toDateTime(complainData.CreatedAt._seconds)}
                        </Typography>
                    </Grid>

                </Grid>
                <Grid item container direction="row" alignItems="center">
                    <Grid item md={6} sm={12} xs={12} pt={4}>
                        <Typography variant="subtitle1" style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <WarningAmberIcon /> <b style={{ marginRight: "10px " }}>Complain Type: </b> {complainData.ComplainType}
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} pt={4}>
                        <Typography variant="subtitle1" style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <FlashAutoIcon /> <b style={{ marginRight: "10px " }}>Severity: </b> {complainData.ComplainSeverity}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" alignItems="center">
                    <Grid item md={6} sm={12} xs={12} pt={4}>
                        <Typography variant="subtitle1" style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <WorkOutline /> <b style={{ marginRight: "10px " }}>Departmebnt: </b> {complainData.department.DepartmentName}
                        </Typography>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} pt={4}>
                        <Typography variant="subtitle1" style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <Public /> <b style={{ marginRight: "10px " }}>City: </b> {complainData.city.CityName}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" alignItems="center">
                    <Grid item md={6} sm={12} xs={12} pt={4}>
                        <Typography variant="subtitle1" style={{
                            verticalAlign: 'middle',
                            display: 'inline-flex'
                        }}>
                            <Subject /> <b style={{ marginRight: "10px " }}>Subject Line: </b> {complainData.ComplainSubject}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container pt={5}>
                    <Typography variant="subtitle1" pl={2}>
                        {ReactHtmlParser(complainData.ComplainDescription)}
                    </Typography>
                </Grid>
                {complainData && complainData.ComplainDocument && Array.isArray(complainData.ComplainDocument.ComplainDocumentPath) && complainData.ComplainDocument.ComplainDocumentPath.map((document, i) => {
                    return (
                        <Grid item container direction="row" alignItems="center" md={12} key={i}>
                            <Grid item md={8} sm={12} xs={12} pt={4}>
                                <Typography variant="subtitle1" style={{
                                    verticalAlign: 'middle',
                                    display: 'inline-flex'
                                }}>
                                    <b style={{ marginRight: "10px " }}>File </b> {i + 1}
                                </Typography>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12} pt={4}>
                                <Typography variant="subtitle1" >
                                    <img style={{ width: "100%", maxHeight: "200px" }} src={document} alt="" />
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                })}
                {complainData && complainData.ComplainDocument && !Array.isArray(complainData.ComplainDocument.ComplainDocumentPath) ? (
                    <Fragment>
                        <Grid item md={6} sm={12} xs={12} pt={4}>
                            <Typography variant="subtitle1" style={{
                                verticalAlign: 'middle',
                                display: 'inline-flex'
                            }}>
                                <b style={{ marginRight: "10px " }}>Departmebnt: </b> Private
                            </Typography>
                        </Grid>
                        <Grid item md={6} sm={12} xs={12} pt={4}>
                            <Typography variant="subtitle1" >
                                <img style={{ width: "100%", maxHeight: "200px" }} src={complainData.ComplainDocument.ComplainDocumentPath} alt="" />
                            </Typography>
                        </Grid>
                    </Fragment>
                ) : ""}
            </Grid>
            <Grid container mt={12}>
                <Typography variant="h6">
                    Communication
                </Typography>
            </Grid>
            <Grid container style={{ background: "#fff", color: "#1F5B88" }} px={5} py={5}>
                {complainData && complainData.comments && complainData.comments.sort((a, b) => b.createdAt._seconds - a.createdAt._seconds)
                    .map(comment => {
                        return auth.user.id === comment.userid ? (
                            <Grid container my={5}>
                                <Grid item md={12} sm={12} xs={12} container>
                                    <Box style={{ width: "100%", display: "flex", justifyContent: "space-between" }} mb={2}>
                                        <Typography style={{ textAlign: "start" }}>
                                            <b>{comment.by}</b>
                                        </Typography>
                                        <Typography style={{ textAlign: "start" }}>
                                            {toDateTime(comment.createdAt._seconds)}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={8} sm={12} xs={12} py={1} px={2} style={{ background: "#3AAFA8", borderRadius: "20px", color: "#fff" }}>
                                    <Typography>
                                        {ReactHtmlParser(comment.comments)}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container my={5}
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="center"
                            >
                                <Grid item md={12} sm={12} xs={12} container>
                                    <Box style={{ width: "100%", display: "flex", justifyContent: "space-between" }} mb={2}>
                                        <Typography style={{ textAlign: "start" }}>
                                            {toDateTime(comment.createdAt._seconds)}
                                        </Typography>
                                        <Typography style={{ textAlign: "start" }}>
                                            <b>{comment.by}</b>
                                        </Typography>

                                    </Box>
                                </Grid>
                                <Grid item md={8} sm={12} xs={12} py={1} pl={3} style={{ background: "#eee", borderRadius: "20px", color: "#000" }}>
                                    {ReactHtmlParser(comment.comments)}
                                </Grid>
                            </Grid>
                        )
                    })}


            </Grid>
            <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="start">
                <Grid item md={12} sm={12} xs={12}>
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
                            height: 100,
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
                <Grid item container style={{ background: "#fff" }} py={4} px={4} direction="row" alignItems="center">
                    <Button
                        onClick={handleClick}
                        style={{ color: "#fff" }}
                        type="submit"
                        variant="contained"
                    >
                        Reply
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    );
}
const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(ComplainDepartmentChange);