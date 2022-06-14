const FileService = {
  fileToBase64: (file: File) =>
    new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
      };
    }),
};
export default FileService;
