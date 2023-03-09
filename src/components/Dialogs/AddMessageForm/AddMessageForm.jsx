import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import * as PropTypes from "prop-types";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength100]}
                    name={'newMessageBody'}
                    textarea={'Введите сообщение'}
                    cols="30"
                    rows="1"/>
            </div>
            <div>
                <button>Отправить сообщение</button>
            </div>
        </form>
    )
}

export const ReduxForm = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)
ReduxForm.propTypes = {onSubmit: PropTypes.func};