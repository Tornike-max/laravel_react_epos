import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import { jobs } from "../constants/constant";
import { TbBriefcase2 } from "react-icons/tb";
import { formatCurrency } from "./formatCurrency";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const DescModal = ({
  isOpen,
  onOpenChange,
  onClose,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getParams = searchParams.get("jobId") ?? "";
  const { selected } = useToggleDarkMode();
  const handleCloseModal = () => {
    searchParams.delete("jobId");
    setSearchParams(searchParams);
    onOpenChange();
    onClose();
  };

  const data = jobs.filter((job) => job.id === Number(getParams))[0];

  console.log(data);

  return (
    <Modal
      backdrop="blur"
      size="2xl"
      isOpen={isOpen}
      onOpenChange={handleCloseModal}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: 50,
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: "easeIn",
            },
          },
        },
      }}
      className={`${selected === "dark" && "bg-slate-950"}`}
    >
      <ModalContent onClick={handleCloseModal}>
        <>
          <ModalHeader className="flex items-center gap-3 ">
            <h1
              className={`${
                selected === "dark" ? "text-slate-100" : "text-slate-900"
              } font-bold`}
            >
              {data.title}
            </h1>
            <TbBriefcase2
              className={`p-1 rounded-full text-4xl bg-slate-200 border-1 border-slate-300`}
            />
          </ModalHeader>
          <ModalBody
            className={`${
              selected === "dark" ? "text-slate-200" : "text-slate-900"
            }`}
          >
            <p>
              <span>Location: </span>
              <span>{data.location}</span>
            </p>
            <p>
              <span>Job Type: </span>
              <span>{data.type}</span>
            </p>
            <p>
              <span>Company: </span>
              <span>{data.company}</span>
            </p>
            <p>
              <span>Salary: </span>
              {formatCurrency(data.salary)}
            </p>
            <p>{data.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" variant="shadow" onPress={handleCloseModal}>
              Close
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default DescModal;
