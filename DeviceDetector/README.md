# ENGEL & VÖLKERS DIGITAL INVEST Test

Hello and thanks for taking the time.

## Prerequsites
SQL Server, Angular CLI

## Instructions

Clone the project from GIT
https://github.com/Nikhilthambi/EngelApplication-Test.git

Go To directory (/App/devicedetectorApp) and execute below cmd for install dependencies in Angular project

npm-install

Go To Solution => View => Other Windows => Package Manager Console and execute below command

update-database

OR exec below sql query

USE [DeviceDb]
GO

/****** Object:  Table [dbo].[Device]    Script Date: 8/6/2021 2:56:07 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Device](
	[DeviceId] [int] IDENTITY(1,1) NOT NULL,
	[UserAgent] [nvarchar](200) NOT NULL,
	[OperatingSystem] [nvarchar](25) NOT NULL,
	[Browser] [nvarchar](25) NOT NULL,
	[DeviceName] [nvarchar](25) NOT NULL,
	[OsVersion] [nvarchar](25) NOT NULL,
	[BrowserVersion] [nvarchar](25) NOT NULL,
	[DeviceType] [nvarchar](25) NOT NULL,
	[Orientation] [nvarchar](25) NOT NULL,
 CONSTRAINT [PK_Device] PRIMARY KEY CLUSTERED 
(
	[DeviceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

---

Thank You!
