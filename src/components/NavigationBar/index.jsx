/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useDrivePicker from 'react-google-drive-picker/dist';

export default function NavigationBar() {
  const [openPicker, data, authResponse] = useDrivePicker();
  // const customViewsArray = [new google.picker.DocsView()]; // custom view

  const mimeTypes = [
    'application/vnd.google-apps.folder',
    'application/pdf',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'video/webm',
    'video/mpeg',
    'video/MP2T',
    'video/mp2t',
    'video/quicktime',
    'video/x-m4v',
    'video/mp4',
    'application/vnd.ms-excel',
    'application/vnd.google-apps.spreadsheet',
    { key: '1SGF9QmJzLVe3Qp6erfg6ZKYXG2wrvuYh' },
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  const configGoogleDrive = {
    clientId: '925100428327-j3u63l8efv3jvpjffnma7fbhubr8tkqm.apps.googleusercontent.com',
    developerKey: 'AIzaSyA6tR3wIDLZQYQQMQrMpLdnBeQVL37dx8U',
    viewId: 'DOCS',
    viewMimeTypes: mimeTypes.join(),
    // token: token, // pass oauth token in case you already have one
    // showUploadView: true,
    // showUploadFolders: true,
    supportDrives: true,
    multiselect: true,
    setSelectFolderEnabled: true,
    setIncludeFolders: false,
    // customScope: ['https://www.googleapis.com/auth/auth/drive.apps.readonly'],
    // customViews: ['1SGF9QmJzLVe3Qp6erfg6ZKYXG2wrvuYh'], // custom view
    callbackFunction: (response) => {
      if (response.action === 'cancel') {
        console.log('User clicked cancel/close button');
      }
      console.log(response);
      if (response && response.action === 'picked') {
        response.docs.map((file) => (
          window.open(`https://drive.google.com/u/1/uc?id=${file.id}&export=download`, '_blank')
        ));
      }
    },
  };

  const handleOpenPicker = () => {
    openPicker(configGoogleDrive);
  };

  useEffect(() => {
    if (data) {
      openPicker({
        ...configGoogleDrive,
        token: data.access_token, // pass oauth token in case you already have one
      });
    }
    if (authResponse) {
      console.log('authResponse', authResponse);
    }
  }, [data]);

  return (
    <div>
      <Button
        variant="success"
        onClick={() => handleOpenPicker()}
      >
        Open Picker
      </Button>
    </div>
  );
}
