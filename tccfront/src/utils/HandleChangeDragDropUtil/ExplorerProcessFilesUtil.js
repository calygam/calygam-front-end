export const ExplorerProcessFilesUtil = (files, setSelectedFiles) => {
  const newFiles = Array.from(files);
  if (newFiles.length === 0) return;

  const validNewFiles = newFiles.filter(targetFile => !targetFile.type.startsWith("image/"));

  setSelectedFiles(prevFiles => {
    const nonDuplicate = validNewFiles.filter(
      afterFile => !prevFiles.some(beforeFile => beforeFile.name === afterFile.name)
    );
    return [...prevFiles, ...nonDuplicate].slice(0, 5); //caio<- máx. 5
  });
};