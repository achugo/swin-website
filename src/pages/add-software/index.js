import React, { useEffect, useRef, useState } from "react";
import MainDashboardContainer from "../../components/StyledComponents/MainDashBoardContainer";
import Gutter from "../../components/StyledComponents/Gutter";
import { Button, Icon } from "semantic-ui-react";
import Main from "../../components/main/Main";
import CustomInput from "../../components/CustomInput";
import AddButton from "../../components/AddButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDropdown from "../../components/dropdown/Dropdown";
import { ReactComponent as PlusIcon } from "../../img-assets/grey-plus.svg";
import { ReactComponent as WhitePlus } from "../../img-assets/white-plus.svg";
import CustomTextArea from "../../components/CustomTextArea";
import AddImage from "../../img-assets/add-image.jpeg";
import AppCards from "../../components/AppsCard";
import SoftwareOptions from "../../components/SoftwareOptions";
import api, { url_base } from "../../api/api";
import BtnAdd from "../../components/button/BtnAdd";
import styled from "styled-components";
import { appFont } from "../../appTheme/appFont";
import { LoaderSpinner } from "../auth/register/form/LoginForm";
import Modal from "react-responsive-modal";
import AddDigitalCollateral from "../../components/modals/AddDigitalAssets";
import BtnPrev from "../../components/button/BtnPrev";

const VideoUploadBox = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 3em;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VideoUploadContent = styled.div`
  svg {
    display: block;
    margin: 0 auto;
  }
  span {
    color: black;
    font-family: ${appFont.LIGHTPOPPING};
    display: block;
    margin: 1em auto;
  }

  video {
    height: 380px !important;
    width: 100% !important;
    &::focus-within {
      outline: none;
    }
  }
`;

const DigitalCollateralBox = styled.div`
  background: #b2b2b2 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 10px;
  opacity: 1;
  padding: 2em 2.5em;
  cursor: pointer;
  svg {
    max-width: 25px;
  }
`;

const ImageUploadBox = styled.div`
  background: #f5f5f5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
  padding: 1em;
  width: 100%;
  min-width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 120%;
  }
`;

const ImageUploadContent = styled.div`
  svg {
    display: block;
    margin: 0 auto;
    max-height: 25px;
  }
  span {
    color: black;
    font-family: ${appFont.LIGHTPOPPING};
    display: block;
    margin: 0.5em auto;
    text-align: center;
  }

  img {
    height: 100px !important;
    width: 100% !important;
  }
`;

const AddSoftware = (props) => {
  useEffect(() => {
    // upload_profile_image();
  }, []);

  const categories = [
    { text: "Oil and Gas", value: "Oil and Gas" },
    { text: "Construction", value: "Construction" },
    { text: "Financial Services", value: "Financial Serices" },
    { text: "Healthcare ", value: "Healthcare" },
    { text: "Renewables", value: "Renewable" },
    { text: "Aviation", value: "Aviation" },
  ];

  const [digital_collateral, setCollateral] = useState([]);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = (data) => {
    setOpen(false);
    let all_collat = digital_collateral;
    all_collat.push(data);
    setCollateral(all_collat);
    console.log(all_collat);
  };
  const [err_msg_logo, setErrMsgLogo] = useState("");
  const [err_msg_video, setErrMsgVideo] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading_add_product, setLoadingAddProduct] = useState(false);
  const [loading_profileImg, setLoadingProfileImg] = useState(false);
  const [loading_img, setLoadingImg] = useState(false);
  const [stage, setStage] = useState(1);
  const [file_url, SetFileUrl] = useState("");
  const [video_url, SetVideoUrl] = useState("");
  const [product_id, SetProductId] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [tech_desc, setTechDescription] = useState("");
  const [uploaded_images, setUploadedImages] = useState([]);
  const [image_status, setImageStatus] = useState(false);
  const [specs, setSpecs] = useState([]);

  const profile_img_ref = useRef();
  const video_upload_ref = useRef();
  const images_upload_ref = useRef();

  console.log(digital_collateral);

  const create_product = async () => {
    setLoadingAddProduct(true);
    let payload = {
      name: name,
      logo: file_url,
      description: description,
      tech_description: tech_desc,
      category: category,
      sub_category: "Ayeni",
      url: "https://web.whatsapp.com/",
      is_trial: 1,
      specifications: [
        {
          name: "Platforms",
          category: "device",
        },
      ],
    };

    const status = await api.create("products", payload);
    if (status.status) {
      setLoadingAddProduct(false);
      SetProductId(status.data.id);
      localStorage.setItem("product_id", status.data.id);
      toast.success("Product creation successful");
      setStage(2);
    } else {
      if (status) {
        setLoadingAddProduct(false);
        toast.error(status.message);
      } else {
        toast.error(status.message);
      }
    }
  };

  const goToPrevious = () => {
    setStage(stage - 1);
  };
  const goToNext = () => {
    setStage(stage + 1);
  };

  const fileOnChange = async (e) => {
    setLoadingProfileImg(true);
    /*Selected files data can be collected here.*/
    const newFile = e.target.files[0];
    console.log(e.target.value);
    let fileObj = new FormData();
    fileObj.append("file", newFile);
    fileObj.append("folder", newFile.type);
    const fileResponse = await api.upload("files/upload/temp", fileObj);
    if (fileResponse.status) {
      setLoadingProfileImg(false);
      SetFileUrl(url_base + fileResponse.url);
    } else {
      if (fileResponse) {
        setLoadingProfileImg(false);
        setErrMsgLogo(fileResponse.message);
      }
    }
  };

  const videoUploadChange = async (e) => {
    /*Selected files data can be collected here.*/
    setLoading(true);
    const newFile = e.target.files[0];
    console.log(e.target.value);
    let fileObj = new FormData();
    fileObj.append("file", newFile);
    fileObj.append("folder", newFile.type);
    const fileResponse = await api.upload("files/upload/temp", fileObj);
    if (fileResponse.status) {
      setLoading(false);
      SetVideoUrl(url_base + fileResponse.url);
      uploadProductAsset("video", newFile.name, fileResponse.url);
      toast.success("video upload successful");
    } else {
      if (fileResponse) {
        setLoading(false);
        toast.error(fileResponse.message);
      }
    }
  };

  const ImagesUploadChange = async (e) => {
    /*Selected files data can be collected here.*/
    setLoadingImg(true);
    const newFile = e.target.files[0];
    console.log(e.target.value);
    let fileObj = new FormData();
    fileObj.append("file", newFile);
    fileObj.append("folder", newFile.type);
    const fileResponse = await api.upload("files/upload/temp", fileObj);
    if (fileResponse.status) {
      setLoadingImg(false);
      let url = url_base + fileResponse.url;
      let current_images = uploaded_images;
      let updatedImages = current_images.concat(url);
      setUploadedImages(updatedImages);
      uploadProductAsset("image", newFile.name, fileResponse.url);
    } else {
      if (fileResponse) {
        setLoadingImg(false);
        setErrMsgVideo(fileResponse.message);
      }
    }
  };

  const uploadProductAsset = async (type, name, file) => {
    let payload = {
      product_id: product_id,
      file: url_base + file,
      category: category,
      type: type,
      name: name,
    };

    const status = await api.create("assets", payload);
    if (status.status) {
      toast("product asset uploaded");
      setLoadingImg(false);
    } else {
      if (status) {
        setLoadingImg(false);
      }
    }
  };

  const handleBtnClick = () => {
    profile_img_ref.current.click();
  };

  const handleVideoUpload = () => {
    video_upload_ref.current.click();
  };

  const handleImagesUpload = () => {
    images_upload_ref.current.click();
  };

  const fetchCaterogy = (data) => {
    setCategory(data);
  };

  const fetchSpecifications = (data) => {
    setSpecs(data);
  };

  const add_specifications = async () => {
    let payload = {
      product_id: localStorage.getItem("product_id"),
      specifications: specs,
    };

    const status = await api.create("specifications", payload);
    if (status.status) {
      SetProductId(status.data.id);
      console.log("specifications", status.data);
      localStorage.setItem("product_id", status.data.id);
      toast.success("Product creation successful");
      //props.history.push("/dashboard/mysoftware");
      setStage(2);
    } else {
      if (status) {
        toast.error(status.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal open={open} onClose={onCloseModal} center>
        <AddDigitalCollateral close={onCloseModal} />
      </Modal>
      <Main>
        <MainDashboardContainer>
          <Gutter>
            <section className="ui grid stackable">
              <div className="row">
                <div
                  className={`three wide column ${
                    stage === 1 ? "visible" : "invisible"
                  }`}
                >
                  <ImageUploadBox>
                    {!loading_profileImg && !file_url && (
                      <ImageUploadContent onClick={handleBtnClick}>
                        <PlusIcon />
                        <span>Add Product Images</span>
                      </ImageUploadContent>
                    )}

                    {!loading && file_url && (
                      <img src={file_url} alt=" profile" />
                    )}

                    {loading_profileImg && !file_url && <LoaderSpinner />}
                  </ImageUploadBox>
                  {/* <div onClick={handleBtnClick}>Add BUtton</div> */}
                  <input
                    hidden
                    type="file"
                    ref={profile_img_ref}
                    onChange={fileOnChange}
                  />
                </div>
                <div
                  className={`thirteen wide column ${
                    stage === 1 ? "visible" : "invisible"
                  }`}
                >
                  <CustomInput
                    placeholder={"Product Name"}
                    type="text"
                    change={(e) => setName(e.target.value)}
                  />
                  <Gutter top={10} bottom={10}>
                    <CustomDropdown
                      options={categories}
                      holder="Select Category"
                      getCode={fetchCaterogy}
                    />
                  </Gutter>
                  <Gutter top={10} bottom={10}>
                    <CustomTextArea
                      placeholder={"Overview"}
                      change={(e) => setDescription(e.target.value)}
                    />
                  </Gutter>
                  <Gutter top={10} bottom={10}>
                    <CustomTextArea
                      placeholder={"Tech Description"}
                      change={(e) => setTechDescription(e.target.value)}
                    />
                  </Gutter>
                  {loading_add_product && <LoaderSpinner />}
                  <BtnAdd click={create_product}>Add Product</BtnAdd>
                </div>
              </div>
              <div
                className={`sixteen wide column ${
                  stage === 2 ? "visible" : "invisible"
                }`}
              >
                <h3>Videos</h3>
                <VideoUploadBox>
                  {!loading && !video_url && (
                    <VideoUploadContent onClick={handleVideoUpload}>
                      <PlusIcon />
                      <span>Add introductory video</span>
                    </VideoUploadContent>
                  )}
                  {!loading && video_url && (
                    <video style={{ width: "100%", height: 300 }} controls>
                      <source src={video_url} />
                    </video>
                  )}
                  {loading && !video_url && <LoaderSpinner />}
                </VideoUploadBox>

                <input
                  hidden
                  type="file"
                  ref={video_upload_ref}
                  onChange={videoUploadChange}
                />
              </div>
            </section>
          </Gutter>
          <div className={`${stage === 2 ? "visible" : "invisible"}`}>
            <Gutter>
              <Gutter>
                <h3>Images</h3>
              </Gutter>
              <div className="ui grid">
                <div className="four wide column">
                  {/* <AddButton height={"10rem"} /> */}
                  <ImageUploadBox>
                    {!loading_img && (
                      <ImageUploadContent onClick={handleImagesUpload}>
                        <PlusIcon />
                        <span>Add Product Images</span>
                      </ImageUploadContent>
                    )}

                    {loading_img && <LoaderSpinner />}
                  </ImageUploadBox>

                  <input
                    hidden
                    type="file"
                    ref={images_upload_ref}
                    onChange={ImagesUploadChange}
                  />
                </div>

                {uploaded_images.length > 0 &&
                  uploaded_images.map((item) => {
                    return (
                      <div className="four">
                        <img
                          src={item}
                          alt=""
                          style={{ height: "10rem", display: "block" }}
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="sixteen wide column" style={{ margin: "1em" }}>
                <BtnPrev click={goToPrevious}>Previous</BtnPrev>
                <BtnAdd click={goToNext}>Next</BtnAdd>
              </div>
            </Gutter>
          </div>

          <div className={`${stage === 3 ? "visible" : "invisible"}`}>
            <>
              <Gutter>
                <Gutter>
                  <h3>Digital Collateral</h3>
                </Gutter>
                <div className="ui grid">
                  <div className="four">
                    <DigitalCollateralBox onClick={onOpenModal}>
                      <WhitePlus />
                    </DigitalCollateralBox>
                  </div>

                  {digital_collateral.length > 0 &&
                    digital_collateral.map((item) => (
                      <div className="four">
                        <AppCards content={item} />
                      </div>
                    ))}
                </div>
              </Gutter>
              <Gutter>
                <SoftwareOptions getSpecs={fetchSpecifications} />
              </Gutter>
              <Gutter>
                <Button basic color="violet">
                  <Button.Content>
                    <Icon name={"plus"} />
                    Add Features
                  </Button.Content>
                </Button>
              </Gutter>
              <Gutter>
                <section
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <BtnPrev click={goToPrevious}>Previous</BtnPrev>
                  <BtnAdd click={add_specifications}>Go Live</BtnAdd>
                </section>
              </Gutter>
            </>
          </div>
        </MainDashboardContainer>
      </Main>
    </>
  );
};
export default AddSoftware;
