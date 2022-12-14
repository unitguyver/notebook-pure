declare interface Window {
  showOpenFilePicker(): Promise<FileSystemFileHandle>
  showSaveFilePicker(options: {
    suggestedName: string
    types?: {
      description?: string
    }[]
  }): Promise<FileSystemFileHandle>
}

declare interface FileSystemFileHandle {
  createWritable(): Promise<FileSystemWritableFileStream>
}

declare interface File {
  readonly lastModifiedDate: Date
}
