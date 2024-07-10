import { useDropzone } from "react-dropzone";
import { useEffect, useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import fileReaderStream from "filereader-stream";

export default function Create() {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");

  const [fileUrl, setFileUrl] = useState<File | null>(null);
  const [ImgBase64, setImgBase64] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [nftUrl, setNftUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<string>("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const base64 = readerEvent.target?.result as string;
        setImgBase64(base64);
        setFileUrl(file);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "deadline":
        setDeadline(value);
        break;
      case "nft":
        if (files && files.length > 0) {
          setFileUrl(files[0]);
        }
        break;
      default:
        break;
    }
  };

  const Files = acceptedFiles.map((file) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const resetForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setFileUrl(null);
    setCategory("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title || !description || !fileUrl) {
      toast.error("Please fill all required fields");
    } else {
      try {
        setLoading(true);

        // Add your submission logic here

        resetForm();
        toast.success("NFT successfully minted!");
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while minting the NFT");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <div className="bg-[#664406] rounded-lg mx-[50px] sm:mx-[80px]">
        <div className="justify-center align-center">
          {/* headers */}
          <div className="pb-3">
            <h1 className="text-white text-[22px] sm:text-[37px] text-center  pt-[66px] font-bold leading-10">
              Transform your words into tokens
            </h1>
            <p className="text-gray-50 text-[13px] sm:text-[18px] opacity-70 pt-[20px] pb-[10px] text-center font-normal leading-7">
              Launch your career with ChainTip: <br /> Where your passion for news meets rewarding opportunities.
            </p>
          </div>

          <div className="w-full items-center justify-center flex flex-col pb-5">
            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-lg px-8 pb-[50px] flex flex-col"
            >
              {/* title input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white text-sm pb-2 font-semibold leading-snug"
                  htmlFor="title"
                >
                  News Title
                </label>
                <input
                  className="border rounded w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="A catchy Title of your news"
                />
              </div>

             

             


              {/* picture */}
              <div {...getRootProps({ className: "dropzone" })} className="pb-5 appearance-none">
                <label
                  className="block text-white text-sm pb-2 font-semibold leading-snug"
                  htmlFor="picture"
                >
                  Add Picture
                </label>
              </div>

              {/* dropzone section for the image */}
              <div className="bg-white rounded-md flex flex-col">
                <input
                  name="nft"
                  id="picture"
                  type="file"
                  accept="image/png"
                  className="border rounded w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...getInputProps()}
                />
                <p className="pt-[20px] text-center text-gray-700 text-opacity-50">
                  Drag and drop or Select files here
                </p>
                <button
                  className="text-violet-500 pb-[50px] flex justify-center align-center"
                  type="button"
                  onClick={open}
                >
                  Select file
                </button>
              </div>
              <aside className="text-white">
                <ul>{Files}</ul>
              </aside>

              {/* headline input */}
              <div className="pb-6 pt-4 appearance-none">
                <label
                  className="block text-white text-sm pb-2 font-semibold leading-snug"
                  htmlFor="description"
                >
                  News Headline
                </label>
                <input
                  className="border rounded w-full md:w-[600px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  name="description"
                  value={headline}
                  onChange={handleChange}
                  placeholder="Short description of your news"
                />
              </div>

             

             

              <div className="flex flex-col pb-[32px]">
          <label  className="block text-white text-sm pb-2 font-semibold leading-snug"
                  htmlFor="description">
            Story
          </label>
          <textarea
            required
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="border rounded-lg w-full  md:w-[600px] h-[300px] py-3 px-5 text-gray-700 leading-tight "
            placeholder="Write your story"
          />
        </div>

              <div className="px-5 py-2.5 rounded-lg bg-[#ac740c] border justify-center items-center gap-2 inline-flex">
                <button type="submit" className="text-white cursor-pointer" disabled={loading}>
                  {loading ? "Posting..pls wait" : "Post"}
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
