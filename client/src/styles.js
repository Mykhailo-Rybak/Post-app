import {makeStyles} from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 10,
        margin: '20px 0',
        padding: '5px 15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: '15px',
    },
    btn: {
        marginLeft: 'auto',
        padding: '5px 10px',
        color: 'rgb(255,255,255)',
        border: '2px solid rgb(255,255,255)'
    },
}))
