import React from "react";
import { Box, Header, Text } from "zmp-ui";
import "../styles/app.css";
const CustomHeader = ({
  title,
  subtitle,
  levelAccount,
  imageUrl,
  imageAccount,
  showBackIcon = false,
}) => {
  return (
    <Box className="">
      <Header
        className={imageAccount ? "app-header custom-header-account page-custom-header no-border pl-4 flex-none pb-[6px]"
                                : "app-header page-custom-header no-border pl-4 flex-none pb-[6px]"
        }
        showBackIcon={showBackIcon}
        hideAndroidBottomNavigationBar={false}
        hideIOSSafeAreaBottom={false}
        title={
          <Box flex alignItems="center" className="space-x-2">
            {imageUrl && (
              <img
                className="w-8 h-8 rounded-lg image-customter"
                src={imageUrl}
                alt="Logo"
              />
            )}

            {imageAccount && (
              <img className="image-account" src={imageAccount} alt="User"/>
            )}

            {title && (
              <Box>
                <Text.Title className="title-account">{title}</Text.Title>

                {subtitle && <span className="sub-employee">{subtitle} |</span>}
                {levelAccount && 
                    <span className="sub-employee"> {levelAccount}</span>
                }
              </Box>
            )}
          </Box>
        }
      />
    </Box>
  );
};

export default CustomHeader;
