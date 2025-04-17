"use client";

import React, { useState } from "react";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { FileUpload } from "./ui/FileUpload";
import { cn } from "@/lib/utils";

// Helper function to fetch the public IP address
async function getPublicIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching IP address:", error);
    return "";
  }
}

export function ContactForm() {
  // State to track file attachments (for submission data)
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  // State for submission status
  const [buttonMessage, setButtonMessage] = useState("Send");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for field-specific errors
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
  // A state variable to force re-mount of FileUpload (thus clearing its internal state)
  const [fileUploadKey, setFileUploadKey] = useState<number>(0);

  // When files are dropped or selected in FileUpload, update state
  const handleFileChange = (files: File[]) => {
    setAttachedFiles(files);
  };

  // Handle form submission with local validation
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonMessage("Sending...");
    setFieldErrors({}); // clear previous errors if any

    const form = e.currentTarget;
    const formData = new FormData();

    // Client-side validation for required fields
    let errors: { [key: string]: string } = {};
    if (!form.f_name.value.trim()) {
      errors.f_name = "First name is required.";
    }
    if (!form.l_name.value.trim()) {
      errors.l_name = "Last name is required.";
    }
    if (!form.email.value.trim()) {
      errors.email = "Email is required.";
    }
    if (!form.title.value.trim()) {
      errors.title = "Title is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      setButtonMessage("Send");
      return;
    }

    // Append fields to FormData
    formData.append("f_name", form.f_name.value);
    formData.append("l_name", form.l_name.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("linkedin_id", form.linkedin_id.value);
    formData.append("title", form.title.value);
    formData.append("content", form.content.value);

    // Append additional contextual information
    formData.append("user_agent", navigator.userAgent);
    const ip_address = await getPublicIP();
    formData.append("ip_address", ip_address);

    // Append the file(s) if any
    attachedFiles.forEach((file) => {
      formData.append("attachment", file);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/contacts/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setButtonMessage("Message Sent!");
        form.reset();

        // Clear file selections and force FileUpload re-mount
        setAttachedFiles([]);
        setFileUploadKey((prev) => prev + 1);

        setFieldErrors({});
        setTimeout(() => {
          setButtonMessage("Send");
          setIsSubmitting(false);
        }, 3000);
      } else {
        // Parse field-specific error messages from API response (if provided)
        const errorData = await response.json();
        setFieldErrors(errorData);
        setButtonMessage("Send");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error during API request:", error);
      setButtonMessage("Error. Try again.");
      setIsSubmitting(false);
      setTimeout(() => {
        setButtonMessage("Send");
      }, 4000);
    }
  };

  return (
    <div className="shadow-input mx-auto mb-20 w-full max-w-lg border border-white/[0.2] rounded-xl p-4 md:rounded-2xl md:p-8 bg-Secondary">
      <h2 className="text-xl font-bold text-HighlightText">Contact me fast</h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300">
        You can send your phone number or email to me
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* First Name & Last Name */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="f_name">First name</Label>
            <Input id="f_name" name="f_name" placeholder="Mobin" type="text" />
            {fieldErrors.f_name && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.f_name}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="l_name">Last name</Label>
            <Input id="l_name" name="l_name" placeholder="Heydari" type="text" />
            {fieldErrors.l_name && (
              <p className="text-red-500 text-xs mt-1">{fieldErrors.l_name}</p>
            )}
          </LabelInputContainer>
        </div>
        {/* Email */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" placeholder="mobinheydari.developer@gmail.com" type="email" />
          {fieldErrors.email && (
            <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
          )}
        </LabelInputContainer>
        {/* Phone */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" placeholder="0910-207-2859" type="tel" />
        </LabelInputContainer>
        {/* LinkedIn ID */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="linkedin_id">Your LinkedIn ID</Label>
          <Input id="linkedin_id" name="linkedin_id" placeholder="Mobin-Heydari" type="text" />
        </LabelInputContainer>
        {/* Title */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Subject" type="text" />
          {fieldErrors.title && (
            <p className="text-red-500 text-xs mt-1">{fieldErrors.title}</p>
          )}
        </LabelInputContainer>
        {/* Content */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="content">Content</Label>
          <Input id="content" name="content" placeholder="Your message" type="text" />
        </LabelInputContainer>
        {/* File Upload */}
        <LabelInputContainer className="mb-8">
          <Label>Attachment</Label>
          <FileUpload key={fileUploadKey} onChange={handleFileChange} />
        </LabelInputContainer>
        {/* Submit Button */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br font-bold text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] bg-slate-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          {buttonMessage}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
