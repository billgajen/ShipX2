import React from "react";

//Images
const AccountApp = () => {

	return (
		<>
			<div className="row">
				<div className="col-xl-6 col-lg-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">Account Settings</h4>
						</div>
						<div className="card-body">
							<div className="basic-form">
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="profile-image">Profile Image</label>
										<div className="col-sm-9">
											<input
												type="text"
												className="form-control"
												placeholder=""
												id="first-name"
												name="first-name"
											/>
										</div>
									</div>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="first-name">First Name</label>
										<div className="col-sm-9">
											<input
												type="text"
												className="form-control"
												placeholder=""
												id="first-name"
												name="first-name"
											/>
										</div>
									</div>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="last-name">Last Name</label>
										<div className="col-sm-9">
											<input
												type="text"
												className="form-control"
												placeholder=""
												id="last-name"
												name="last-name"
											/>
										</div>
									</div>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="email">Email</label>
										<div className="col-sm-9">
											<input
												type="email"
												className="form-control"
												placeholder="Email"
												id="email"
												name="email"
											/>
										</div>
									</div>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="old-password">Old Password</label>
										<div className="col-sm-9">
											<input
												type="password"
												className="form-control"
												placeholder="Enter Old Password"
												id="old-password"
												name="old-password"
											/>
										</div>
									</div>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="new-password">New Password</label>
										<div className="col-sm-9">
											<input
												type="password"
												className="form-control"
												placeholder="Enter New Password"
												id="new-password"
												name="new-password"
											/>
										</div>
									</div>
									<div className="mb-3 row">
										<div className="col-sm-10">
											<button type="submit" className="btn btn-primary justify-content-end">
												Update
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-6 col-lg-12">
					<div className="card">
						<div className="card-header">
							<h4 className="card-title">App Settings</h4>
						</div>
						<div className="card-body">
							<div className="basic-form">
								<form onSubmit={(e) => e.preventDefault()}>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="currency">Currency</label>
										<div className="col-sm-9">
											<select
												className="form-control"
												id="currency"
												name="currency"
											>
												<option value="USD">
													USD - United States Dollars
												</option>
												<option value="EUR">
													EUR - Euros
												</option>
												<option value="GBP">
													GBP - British Pounds
												</option>
												<option value="CAD">
													CAD - Canadian Dollars
												</option>
												<option value="MXN">
													MXN - Mexican Peso
												</option>
												<option value="AUD">
													AUD - Australian Dollars
												</option>
												<option value="JPY">
													JPY - Japanese Yen
												</option>
												<option value="INR">
													INR - Indian Rupee
												</option>
												<option value="SEK">
													SEK - Swedish Krona
												</option>
												<option value="BRL">
													BRL - Brazilian Real
												</option>
												<option value="EGP">
													EGP - Egyptian Pound
												</option>
												<option value="AED">
													AED - United Arab Emirates Dirham
												</option>
												<option value="SAR">
													SAR - Saudi Riyal
												</option>
												<option value="TRY">
													TRY - Turkish Lira
												</option>
												<option value="SGD">
													SGD - Singapore Dollar
												</option>
											</select>
										</div>
									</div>
									<div className="mb-3 row">
										<label className="col-sm-3 col-form-label" for="timezone">Timezone</label>
										<div className="col-sm-9">
										<select
												className="form-control"
												id="timezone"
												name="timezone"
											>
												<option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
												<option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
												<option value="-10:00">(GMT -10:00) Hawaii</option>
												<option value="-09:50">(GMT -9:30) Taiohae</option>
												<option value="-09:00">(GMT -9:00) Alaska</option>
												<option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
												<option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
												<option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
												<option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
												<option value="-04:50">(GMT -4:30) Caracas</option>
												<option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
												<option value="-03:50">(GMT -3:30) Newfoundland</option>
												<option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
												<option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
												<option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
												<option value="+00:00" selected="selected">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
												<option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
												<option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
												<option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
												<option value="+03:50">(GMT +3:30) Tehran</option>
												<option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
												<option value="+04:50">(GMT +4:30) Kabul</option>
												<option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
												<option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
												<option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
												<option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
												<option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
												<option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
												<option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
												<option value="+08:75">(GMT +8:45) Eucla</option>
												<option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
												<option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
												<option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
												<option value="+10:50">(GMT +10:30) Lord Howe Island</option>
												<option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
												<option value="+11:50">(GMT +11:30) Norfolk Island</option>
												<option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
												<option value="+12:75">(GMT +12:45) Chatham Islands</option>
												<option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
												<option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
											</select>
										</div>
									</div>
									<fieldset className="form-group">
										<div className="row mb-3">
											<label className="col-form-label col-sm-3 pt-0">
												Date format
											</label>
											<div className="col-sm-9">
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="gridRadios"
														value="option1"
														id="option1"
													/>
													<label className="form-check-label" for="option1">
														mm/dd/yyyy
													</label>
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="gridRadios"
														value="option2"
														id="option2"
													/>
													<label className="form-check-label" for="option2">
														dd/mm/yyyy
													</label>
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="gridRadios"
														value="option3"
														id="option3"
													/>
													<label className="form-check-label" for="option3">
														yyyy/mm/dd
													</label>
												</div>
												<div className="form-check">
													<input
														className="form-check-input"
														type="radio"
														name="gridRadios"
														value="option4"
														id="option4"
														defaultChecked
													/>
													<label className="form-check-label" for="option4">
														MMM dd, yyyy
													</label>
												</div>
											</div>
										</div>
									</fieldset>
									<div className="mb-3 row">
										<div className="col-sm-10">
											<button type="submit" className="btn btn-primary justify-content-end">
												Update
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default AccountApp;