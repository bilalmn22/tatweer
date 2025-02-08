import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TruckStatus from "./status";
import clsx from "clsx";

function DriversTable() {
  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 py-2 md:pt-0">
            <div className="md:hidden">
              {[...Array(5)]?.map((_, index) => (
                <div
                  key={index}
                  className="mb-2 w-full rounded-md bg-white p-4"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect width="28" height="28" rx="20" fill="#AA9C75" />
                          <rect
                            width="28"
                            height="28"
                            rx="20"
                            fill="url(#pattern0_47_2806)"
                          />
                          <defs>
                            <pattern
                              id="pattern0_47_2806"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_47_2806"
                                transform="scale(0.0357143)"
                              />
                            </pattern>
                            <image
                              id="image0_47_2806"
                              width="28"
                              height="28"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAA7klEQVR4AbXQIayDMBRG4eMT3CzJFB6FR+GefAaNm0Q8h6pC4quW4PFLvULgcJU4FEnNfaFqdLX7ZJPe/Dl8X7sU2WwSYm6bYRRRxAxSFKLGPeVTdoxMG7kb+KRdVorqeO73yEeNsbVU6aEJjXvyK39Yw+ByrgrpmVdopWafuJp2GmmAZaGXkneVKNYZoJEH24t3ZvMHT/NKJ9VlzpGec07WoF0eFjBbAiipMqfDdnkp/Rn4xRQWTPfRP/rAPQElRe70zQdOCFnD0+gjq/ywQCc/99oNGEuEnfGBWyIeopwPHDWLpZWGqPJZ0/V83T8fo4GE/OPPrgAAAABJRU5ErkJggg=="
                            />
                          </defs>
                        </svg>

                        <p>bilal</p>
                      </div>
                      <p className="text-sm text-gray-500">
                        b.mamoun@esi-sba.dz
                      </p>
                    </div>
                    {/* <DriverStatus status={"online"} /> */}
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <div>
                      <p className="text-xl font-medium">44</p>
                      <p>22/08/2024</p>
                    </div>
                    <div className="flex justify-end gap-2">
                      {/* <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <table
              style={{ tableLayout: "fixed" }}
              className="hidden min-w-full rounded-md text-gray-900 md:table"
            >
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
                <col width={100} />
              </colgroup>
              <thead className="rounded-md  text-left text-sm font-normal">
                <tr>
                  {[
                    "Name",
                    "Status",
                    "Driver",
                    "Adress",
                    "Total Weight",
                    "Total Volume",
                    "Temp Control",
                    "Temp Ships",
                    "",
                  ].map((header, index) => (
                    <th
                      scope="col"
                      className={clsx(
                        "px-4 py-5  text-[#667085] text-xs font-medium leading-4",
                        {
                          "text-center": index === 6,
                        }
                      )}
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody
                style={{ boxShadow: "0 0 0 2px #f4f2f2" }}
                className="   text-gray-900 rounded-[32px] "
              >
                {[...Array(10)].map((_, index) => (
                  <tr
                    key={index}
                    style={{ transition: "all ease .2s" }}
                    className="group  rounded-3xl cursor-pointer bg-white hover:bg-[#e2ecff] "
                  >
                    <td
                      className={clsx(
                        "whitespace-nowrap  py-3 px-4  text-sm text-black group-first-of-type:rounded-tl-[32px] group-last-of-type:rounded-bl-[32px]   "
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://s3-alpha-sig.figma.com/img/11f2/48b1/b508a15de65a0aeb34d04838502d97f5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OQqTH0~sJPeAeNpFZF3emhspSf-3SUhz1NowIpWlk1dUNQBKTrscWWET1OQ6YiBoJ~l5M0CTbOiQJyl6ww3Ma5cnlSVHPOG~1YS4XA-neK0F8O3bskENiIZK9plzJsU-qQTkCtjGDVVLtBTimULk6FicC~WtClr-GS26RbUs-zZz4Otv6PUNR2ArjeyQMqaywJx2Gmsybx9U6V61TBfet~YsIULFrdac6Yan6smoFEo1a5qjx3OQe4mY-otnhe27q00euHERHIHIqliJmozvCitoaWTYg7Q1NbvDAKFb6hk0OsuOcokp1P8T2wUa9thVWN3Tfo28vzl0aeUd0EW-xA__"
                          alt={`fnd profile picture`}
                          width={24}
                          height={24}
                        />

                        <p className="font-semibold text-sm">LPT-987</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm">
                      <TruckStatus
                        status={index % 2 == 0 ? "OnService" : "OffService"}
                      />
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold px-4 py-2 text-sm">
                      <div className="flex items-center gap-3">
                        <Avatar
                          src="https://img.freepik.com/psd-gratuit/personne-celebrant-son-orientation-sexuelle_23-2150115662.jpg?semt=ais_incoming"
                          alt={`fnd profile picture`}
                          width={24}
                          height={24}
                        />

                        <p className="font-semibold text-sm">Lewis Hamilton</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm">
                      Bechar, Algeria
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-md ">
                      3,250 kg
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-md ">
                      91.8 m3
                    </td>
                    <td className="whitespace-nowrap text-center leading-5 font-semibold  px-4 py-2 text-sm">
                      {
                        ["Reefers", "Deep-Freeze", "Chilled", "Not Available"][
                          index % 4
                        ]
                      }
                    </td>
                    <td className="whitespace-nowrap text-center leading-5 font-semibold  px-4 py-2 text-sm">
                      55
                    </td>
                    <td className="whitespace-nowrap leading-5 font-semibold  px-4 py-2 text-sm group-first-of-type:rounded-tr-[32px] group-last-of-type:rounded-br-[32px]">
                      <IconButton
                        aria-label="delete"
                        size="large"
                        style={{ color: "rgba(102, 112, 133, 1)" }}
                      >
                        <DeleteOutlineIcon style={{ color: "black" }} />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriversTable;
