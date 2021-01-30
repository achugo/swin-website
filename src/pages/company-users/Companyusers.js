import React, { useState } from "react";
import Main from "../../components/main/Main";
import { Icon, Label, Menu } from "semantic-ui-react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";
import { ReactComponent as EditIcon } from "../../img-assets/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../img-assets/delete-icon.svg";
import EditModal from "../../components/modals/EditModal";
import Gutter from "../../components/StyledComponents/Gutter";
import AddCompanyUser from "../../components/modals/AddCompanyUser";

const AddButton = styled.button`
  background: transparent linear-gradient(107deg, #74e0ff 0%, #41a0ff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #41a0ff83;
  padding: 0.8em 1.5em;
  border-radius: 5px;
  outline: none;
  color: white;
  border: none;

  &::focus {
    outline: none;
    border: none;
  }
`;

const Section = styled.section`
  position: relative;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  th {
    text-align: left;
    padding: 1em;
  }

  tbody {
    tr {
      padding: 1em;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 20px #0000001c;
      border-radius: 10px;
    }
    tr td:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    tr td:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  td {
    padding: 1em;
    border: none;

    svg {
      margin: 0px 0.5em;
      max-width: 15px;
      cursor: pointer;
    }
  }
`;

const CompanyUsers = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <Modal open={open} onClose={onCloseModal} center>
        <AddCompanyUser />
      </Modal>
      <Main>
        <Gutter>
          <section style={{ display: "flex", justifyContent: "flex-end" }}>
            <AddButton onClick={onOpenModal}>
              Add User
              <Icon name="edit" style={{ marginLeft: "0.5rem" }} />
            </AddButton>
          </section>
        </Gutter>
        <Section>
          <Table>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Date created</th>
              <th>Actions</th>
            </tr>

            <tbody>
              <tr>
                <td>1</td>
                <td>Achugo Chukwuemeka </td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>
                  <>
                    <EditIcon />
                    <DeleteIcon />
                  </>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Achugo Chukwuemeka </td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>Cell</td>
                <td>
                  <>
                    <EditIcon />
                    <DeleteIcon />
                  </>
                </td>
              </tr>
            </tbody>
          </Table>
        </Section>
      </Main>
    </>
  );
};
export default CompanyUsers;
