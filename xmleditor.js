function loginApp(){
  const d = document;
  if(d.getElementById("usuario").value === "test"){
    if(d.getElementById("password").value === "xmltest"){
      d.getElementById("login0").classList.add("hide")
      d.getElementById("login1").classList.remove("hide")
      d.getElementById("login2").classList.remove("hide")
      d.getElementById("login3").classList.remove("hide")
      d.getElementById("login4").classList.remove("hide")
    }else{
      d.getElementById("forma").reset();
    }
  }else{
    d.getElementById("forma").reset();
  }
}

function downloadFile() {
    const d = document;
    let assetId = d.getElementById("assetId").value;
    let title = d.getElementById("title").value;
    let year = d.getElementById("year").value;
    let summary = d.getElementById("summary").value;
    let licenseStart = d.getElementById("licenseStart").value;
    let licenseEnd = d.getElementById("licenseEnd").value;
    let runtime = d.getElementById("runtime").value;
    let actors = d.getElementById("actors").value;
    let director = d.getElementById("director").value;
    let writers = d.getElementById("writers").value;
    let rating = d.getElementById("rating").value;
    let studio = d.getElementById("studio").value
    let studio1 = "";
    let studio2 = "";
    studioCode(studio);
    let lang = d.getElementById("lang").value;
    let subs = d.getElementById("subs").value;
    let genre1 = d.getElementById("genre1").value;
    let genre2 = d.getElementById("genre2").value;
    let category1 = d.getElementById("category1").value;
    let category2 = d.getElementById("category2").value;
    let category3 = d.getElementById("category3").value;
    let content = d.getElementById("content").value;
    let poster1 = d.getElementById("poster1").value;
    let poster2 = d.getElementById("poster2").value;

    function studioCode(studio) {
      switch(Number(studio)){
        case 1:
            numText = "Uno";
            break;
        case 2:
            numText = "Dos";
            break;
        case 3:
            numText = "Tres";
            break;
        case 4:
            numText = "Cuatro";
            break;
        case 73:
          studio1 = "PAR";
          studio2 = "PARAMOUNT";
            break;
        default:
            studio1 = "";
            studio2 = "";
            break;
      }
    }

    let filename = `${title}_${year}.xml`;
    let text = 
`<?xml version="1.0" encoding="ISO-8859-1" ?> 
<ADI>
<Metadata><AMS Provider="000104" Asset_Class="package" Asset_ID="${studio1}${assetId}" Verb=""/>
</Metadata>
<Asset>
<Metadata>
<AMS Provider="000104" Asset_Class="title" Asset_ID="${studio1}${Number(++assetId)}" Verb=""/>
<App_Data App="MOD" Name="Type" Value="title"/>
<App_Data App="MOD" Name="Title" Value="${title}" Language="es"/>
<App_Data App="MOD" Name="Title" Value="${title}" Language="en"/>
<App_Data App="MOD" Name="Year" Value="${year}"/>
<App_Data App="MOD" Name="Summary_Medium" Language="es" Value="${summary}" />
<App_Data App="MOD" Name="Summary_Medium" Language="en" Value="${summary}" />
<App_Data App="MOD" Name="Licensing_Window_Start" Value="${licenseStart}T01:00:00"/>
<App_Data App="MOD" Name="Licensing_Window_End" Value="${licenseEnd}T01:00:00"/>
<App_Data App="MOD" Name="DestAreas" Value="-1"/>
<App_Data App="MOD" Name="Run_Time" Value="${runtime}" />
<App_Data App="MOD" Name="Display_Run_Time" Value="${runtime.slice(0, -3)}" />
<App_Data App="MOD" Name="Actors" Language="es" Value="${actors}"/>
<App_Data App="MOD" Name="Director" Language="es" Value="${director}"/>
<App_Data App="MOD" Name="Writers" Language="es" Value="${writers}"/>
<App_Data App="MOD" Name="Country_of_Origin" Value="MX"/> 
<App_Data App="MOD" Name="Rating" Value="${rating}"/> 
<App_Data App="MOD" Name="DistributionList" Value="MX"/>
<App_Data App="MOD" Name="Studio_Name" Value="${studio2}"/>
<App_Data App="MOD" Name="Studio_Code" Value="${studio}"/>
<App_Data App="MOD" Name="Studio_Name" Value="${studio2}"/>
<App_Data App="MOD" Name="Languages" Value="${lang}" />
<App_Data App="MOD" Name="Subtitle_Languages" Value="${subs}"/>
<App_Data App="MOD" Name="Genre" Value="${genre1}"/>
<App_Data App="MOD" Name="Genre" Value="${genre2}"/>
<App_Data App="MOD" Name="Category" CarrierID="" Value="Seachange On demand/Películas/${category1}"/>
<App_Data App="MOD" Name="Category" CarrierID="" Value="Seachange On demand/Películas/${category2}"/>
<App_Data App="MOD" Name="Category" CarrierID="" Value="Seachange On demand/Películas/${category3}"/>
<App_Data App="MOD" Name="Category" CarrierID="" Value="Seachange On demand/OTT/Películas/${category1}"/>
<App_Data App="MOD" Name="Category" CarrierID="" Value="Seachange On demand/OTT/Películas/${category2}"/>
<App_Data App="MOD" Name="Category" CarrierID="" Value="Seachange On demand/OTT/Películas/${category3}"/>
</Metadata>
<Asset>
<Metadata>
<AMS Provider="000104" Verb="CREATE" Asset_ID="${studio1}${Number(++assetId)}" Asset_Class="movie"/>
<App_Data App="MOD" Name="Type" Value="movie"/>
<App_Data App="MOD" Name="Encryption" Value="Y"/>
<App_Data App="MOD" Name="EncryptType" Value="1"/>
<App_Data App="MOD" Name="Domain" Value="IPTV" />
<App_Data App="MOD" Name="Bit_Rate" Value="8000" />
<App_Data App="MOD" Name="Audio_Type" Value="Stereo" />
<App_Data App="MOD" Name="Copy_Protection" Value="N" />
<App_Data App="MOD" Name="Analog_Protection_System" Value="1"/>
<App_Data App="MOD" Name="Support_HDCP" Value="Y" />
<App_Data App="MOD" Name="CGMS_A" Value="3" />
</Metadata>
<Content Value="${content}.ts" />
</Asset>
<Asset>
<Metadata>
<AMS Provider="000104" Asset_Class="movie" Asset_ID="${studio1}${Number(++assetId)}" Verb=""/>
<App_Data App="MOD" Name="Type" Value="movie"/>
<App_Data App="MOD" Name="Encryption" Value="Y"/>
<App_Data App="MOD" Name="EncryptType" Value="2"/>
<App_Data App="MOD" Name="Domain" Value="WEBTV"/>
<App_Data App="MOD" Name="Bit_Rate" Value="15000000"/>
<App_Data App="MOD" Name="ProfileID" Value="98a76fef-7d9e-4821-ad3e-d3d80c6965e9"/>
<App_Data App="MOD" Name="Encoder_Mode" Value="1"/>
<App_Data App="MOD" Name="Audio_Type" Value="Stereo" />
<App_Data App="MOD" Name="Copy_Protection" Value="N" />
<App_Data App="MOD" Name="Analog_Protection_System" Value="1"/>
<App_Data App="MOD" Name="Support_HDCP" Value="Y" />
<App_Data App="MOD" Name="CGMS_A" Value="3" />
</Metadata>
<Content Value="${content}.ts" />
</Asset>
<Asset>
<Metadata>
<AMS Provider="000104" Verb="" Asset_ID="${studio1}${Number(++assetId)}" Asset_Class="poster" />
<App_Data App="MOD" Name="Type" Value="poster" />
<App_Data App="MOD" Name="PType" Value="1" />
</Metadata>
<Content Value="${poster1}.jpg" />
</Asset>
<Asset>
<Metadata>
<AMS Provider="000104" Verb="" Asset_ID="${studio1}${Number(++assetId)}" Asset_Class="poster" />
<App_Data App="MOD" Name="Type" Value="poster" />
<App_Data App="MOD" Name="PType" Value="2" />
</Metadata>
<Content Value="${$poster2}.jpg" />
</Asset>
<Asset>
<Metadata>
<AMS Provider="000104" Verb="" Asset_ID="${studio1}${Number(++assetId)}" Asset_Class="poster" />
<App_Data App="MOD" Name="Type" Value="poster" />
<App_Data App="MOD" Name="PType" Value="3" />
</Metadata>
<Content Value="${poster1}.jpg" />
</Asset>
</Asset>
</ADI>`;

    let element = d.createElement('a');
    element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    d.body.appendChild(element);
    element.click();
    d.body.removeChild(element);
}
$(document).ready(function(){
  $('.maskyear').mask('0000');
});
$(document).ready(function(){
  $('.maskdate').mask('0000-00-00');
});
$(document).ready(function(){
  $('.masktime').mask('000:00:00');
});
