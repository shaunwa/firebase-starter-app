import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
    Button,
    CenteredContentBox,
    HeadingSmall,
    TextInput,
    TextArea,
    UploadSingleFileButton,
} from '../ui';

const Form = styled.div`
    width: 600px;
    margin: 32px;
`;

const FieldsTable = styled.table`
    td {
        padding: 8px;
        width: 50%;
    }
`;

const FullWidthInput = styled(TextInput)`
    width: 100%;
`;

const FullWidthButton = styled(Button)`
    width: 100%;
`;

/*
    This page loads a user's current profile data (name, bio, etc.)
    and allows them to edit it. When the user clicks "save", the changes
    will be persisted to Firebase.
*/
export const EditProfilePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profilePictureFile, setProfilePictureFile] = useState('');
    const [bio, setBio] = useState('');
    const history = useHistory();

    useEffect(() => {
        // Firebase code for loading current user info goes here
    }, []);
    
    const handleFileSelect = file => {
        setProfilePictureFile(file);
    }

    const onSubmitChanges = async () => {
        // Firebase code for saving user's changes goes here
    }

    return (
        <CenteredContentBox>
            <Form>
                <HeadingSmall>Edit Profile</HeadingSmall>
                <FieldsTable>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <FullWidthInput
                                    disabled={isLoading}
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <FullWidthInput
                                    disabled={isLoading}
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Upload a Profile Picture:</td>
                            <td>
                                <UploadSingleFileButton
                                    disabled={isLoading}
                                    onFileUploaded={handleFileSelect}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Bio:</td>
                            <td>
                                <TextArea
                                    disabled={isLoading}
                                    rows='5'
                                    value={bio}
                                    style={{ width: '100%' }}
                                    onChange={e => setBio(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </FieldsTable>
                <FullWidthButton
                    disabled={isLoading}
                    onClick={onSubmitChanges}
                >Save Changes</FullWidthButton>
            </Form>
        </CenteredContentBox>
    )
}